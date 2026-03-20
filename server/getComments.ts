"use server"
import { prisma } from '@/lib/prisma';

async function getComments() {

    try {
        const comments = await prisma.comments.findMany()
        return comments;
    } catch {
        return { error: "something went wrong" }
    }

}

export default getComments