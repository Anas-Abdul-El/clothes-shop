"use server"
import { client } from '@/lib/redis'
import { cachingProduct } from '../cache/cachingProduct'

async function getAllProduct() {
    try {
        await cachingProduct()
    } catch {
        return { error: "something went wrong" }
    }

    try {
        return await client.hGetAll("products")
    } catch {
        return { error: "error in fetching data" }
    }
}

export { getAllProduct }