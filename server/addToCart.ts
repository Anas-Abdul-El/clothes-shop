"use server"
import { prisma } from '@/lib/prisma';
import { type ProductInfo } from '@/types';
import { revalidatePath } from 'next/cache';


async function addToCart(userId: string, productInfo: ProductInfo, path: string) {

    const { productId, quantity, size, color, price } = productInfo

    try {
        await prisma.$transaction(async (db) => {

            const Cart = await db.cart.findUnique({ where: { userId } }) || await db.cart.create({ data: { userId } })
            await db.cartItem.create({
                data: {
                    cartId: Cart.id,
                    productId,
                    quantity,
                    size,
                    color,
                    price,
                }
            })
        })

        revalidatePath(path)
    } catch (error) {
        return { error: `something went wrong` }
    }
}

export default addToCart