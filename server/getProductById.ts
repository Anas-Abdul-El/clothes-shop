"use server"

import { client } from "@/lib/redis"
import { cachingProduct } from "../cache/cachingProduct"

async function getProductById(id: string) {
    await cachingProduct()

    const cachedProduct = await client.hgetall(`products:${id}`)
    const cachedColor = await client.lrange(`color:${id}`, 0, -1)
    const cachedSize = await client.lrange(`size:${id}`, 0, -1)

    const product = JSON.parse(JSON.stringify(cachedProduct))
    const color = JSON.parse(JSON.stringify(cachedColor))
    const size = JSON.parse(JSON.stringify(cachedSize))





    return {
        ...product,
        color,
        size
    }
}

export default getProductById