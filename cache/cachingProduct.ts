import { prisma } from "@/lib/prisma"
import { client } from "@/lib/redis"

async function cachingProduct() {

    const cached = await client.get("products:cached")

    if (cached) {
        return;
    }

    try {
        const products = await prisma.product.findMany({
            include: {
                images: true,
                variants: true,
                collection: true,
            },
        })

        for (const product of products) {

            const {
                id,
                name,
                description,
                price,
                compareAtPrice,
                isBestSeller,
                isFeatured,
                createdAt,
                updatedAt,
                variants,
                images,
                collection
            } = product

            for (const ele of variants) {

                await client.rpush(`color:${id}`, ele.color)
                await client.expire(`color:${id}`, 60 * 60)

                await client.rpush(`stock:${id}`, `${ele.stock}`)
                await client.expire(`stock:${id}`, 60 * 60)

                await client.rpush(`size:${id}`, ele.size)
                await client.expire(`size:${id}`, 60 * 60)
            }

            await client.zadd('products', {
                score: id,
                member: name,
            })
            await client.expire("products", 60 * 60)

            await client.hset(`products:${id}`, {
                id,
                name,
                description,
                price,
                collection: collection?.name || "dress",
                image: images[0].url,
                compareAtPrice: compareAtPrice || 0,
                isBestSeller: isBestSeller ? 1 : 0,
                isFeatured: isFeatured ? 1 : 0,
                createdAt: `${createdAt}`,
                updatedAt: `${updatedAt}`,
            })

            client.expire(`products:${id}`, 60 * 60)

        }

        await client.set("products:cached", "1", { "ex": 60 * 60 })

    } catch (err) {

        return { error: "something went wrong" }

    }
}

export { cachingProduct }