"use server"

import { prisma } from "@/lib/prisma";

async function getPosts() {
    try {
        const posts = await prisma.instagramPost.findMany()
        return posts;
    } catch {
        return { error: "something went wrong" }
    }

}

export default getPosts