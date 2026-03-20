"use server"
import { prisma } from '@/lib/prisma';
import { type ProductInfo } from '@/types';


async function addToCart(userId: string, productInfo: ProductInfo) {

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

    } catch (error) {
        return { error: `something went wrong` }
    }
}

export default addToCart