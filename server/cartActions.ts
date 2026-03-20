"use server"
import { prisma } from "@/lib/prisma";


export async function getCartItems(userId: string) {

    try {
        const Cart = await prisma.cart.findFirst({
            where: {
                userId,
            }
        })

        const cartItemsData = await prisma.cartItem.findMany({
            where: {
                cartId: Cart?.id
            },
            include: { product: true }
        })


        const cartItems = await Promise.all(
            cartItemsData.map((async (ele) => {

                const cartItem = {
                    id: ele.id,
                    color: ele.color,
                    size: ele.size,
                    price: ele.price,
                    quantity: ele.quantity,
                    cartId: ele.cartId,
                    productId: ele.productId,
                    name: ele.product.name,
                }

                const { productId } = cartItem
                const image = await prisma.productImage.findMany({
                    where: {
                        productId,
                    }
                })

                return {
                    ...cartItem,
                    ...image[0],
                    priceForOne: cartItem.price
                }

            }))
        )

        return cartItems
    } catch (error) {
        return { error: `something went wrong * ${error} *` }
    }

}




export async function updateCartItemQuantity(id: string, price: number, action: 'inc' | 'dec') {

    const isAdd = action === 'inc'

    await prisma.cartItem.update({
        where: { id },
        data: {
            quantity: { increment: 1 },
            price,
        },
    })
}