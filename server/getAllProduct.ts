"use server"

import { client } from '@/lib/redis'
import { cachingProduct } from '../cache/cachingProduct'
import type { Product } from '@/types'

async function getAllProduct() {
    try {
        await cachingProduct()

        const range = await client.zrange('products', 0, -1)

        const arr = []
        for (let i = 1; i <= range.length; i++) {
            arr.push({
                value: range[i],
                score: i,
            })
        }

        const data = await Promise.all(arr.map(e => client.hgetall(`products:${e.score}`))) as unknown as Product[]

        return JSON.parse(JSON.stringify(data))
    } catch (err) {
        console.error(err)
        return { error: "something went wrong" }
    }
}

export { getAllProduct }