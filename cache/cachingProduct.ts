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
                images
            } = product

            for (const ele of variants) {
                await client.rPush(`color:${id}`, ele.color)
                await client.rPush(`stock:${id}`, `${ele.stock}`)
                await client.rPush(`size:${id}`, ele.size)
            }

            await client.hSet(`products:${id}`, {
                id,
                name,
                description,
                price,
                image: images[0].url,
                compareAtPrice: compareAtPrice || 0,
                isBestSeller: isBestSeller ? 1 : 0,
                isFeatured: isFeatured ? 1 : 0,
                createdAt: `${createdAt}`,
                updatedAt: `${updatedAt}`,
            })

        }

        await client.set("products:cached", "1")

    } catch (err) {

        return { error: "something went wrong" }

    }
}

export { cachingProduct }