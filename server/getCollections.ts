"use server"
import { client } from "@/lib/redis";
import cachingCollection from "../cache/cachingCollection";
import type { collectionType } from "@/types";


async function getCollections() {
    try {
        const res = await cachingCollection();

        if (res) return res

        const range = await client.zrange("collections", 0, -1)

        const arr = [];
        for (let i = 1; i <= range.length; i++) {
            arr.push({
                value: range[i],
                score: i,
            })
        }

        const data = await Promise.all(arr.map(async (ele) => await client.hgetall(`collections:${ele.score}`))) as unknown as collectionType[]


        return JSON.parse(JSON.stringify(data))

    } catch (error) {
        return { error: `something went wrong! * ${error} * ` }
    }
}

export default getCollections