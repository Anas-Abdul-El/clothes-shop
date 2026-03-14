import { prisma } from "@/lib/prisma";
import { client } from "@/lib/redis";


async function cachingCollection() {

    const isCached = await client.get("collections:cached")
    if (isCached) return;


    try {
        const collections = await prisma.collection.findMany()
        for (const collection of collections) {

            const { id, name } = collection

            await client.zadd('collections', {
                score: id,
                member: name,
            })
            await client.expire("collections", 60 * 60)

            await client.hset(`collections:${id}`, collection)
            await client.expire(`collections${id}`, 60 * 60)
        }

        await client.set("collections:cached", 1, { ex: 60 * 60 })

    } catch (error) {
        console.log(error);
        return { error: `something went error * ${error} * ` }
    }

}

export default cachingCollection