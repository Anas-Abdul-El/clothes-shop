"use server"

import { client } from '@/lib/redis'
import { cachingProduct } from '../cache/cachingProduct'
import type { Product } from '@/types'

async function getAllProduct() {
    try {
        await cachingProduct()

        const range = await client.zRangeWithScores('products', 0, -1)

        const data = await Promise.all(range.map(e => client.hGetAll(`products:${e.score}`))) as unknown as Product[]

        await client.expire("products", 60 * 60)
        await Promise.all(
            range.map(e => client.expire(`products:${e.score}`, 60 * 60))
        )

        return JSON.parse(JSON.stringify(data))
    } catch (err) {
        console.error(err)
        return { error: "something went wrong" }
    }
}

export { getAllProduct }