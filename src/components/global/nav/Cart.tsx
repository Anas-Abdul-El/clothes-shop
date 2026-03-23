"use client"
import {
    DrawerContent,
    DrawerClose,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    Drawer,
    DrawerTrigger
} from "@/components/ui/drawer"
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ShoppingBag, X } from 'lucide-react'
import { getCartItems, updateCartItemQuantity } from "../../../../server/cartActions"
import { getItem } from "@/utils/localstorage"
import ErrorInFetching from "../Error-in-fetching"
import { startTransition, useEffect, useOptimistic, useState, useTransition } from "react"
import { type CartItem } from "@/types"


const userId = getItem('user')


function Cart() {

    const [cartItems, setCartItems] = useState<CartItem[] | { error: string }>([])

    const fetchCartItems = async () => {
        startTransition(async () => {
            const data = await getCartItems(userId)
            setCartItems(data)
        })
    }

    useEffect(() => {
        fetchCartItems()
    }, [])

    const [optimisticItems, setOptimisticItems] = useOptimistic(
        cartItems,
        (currentItems, args: { itemId: string; action: 'inc' | 'dec' }) => {
            if ("error" in currentItems) return currentItems;

            return currentItems.map((ele) => {
                if (ele.id !== args.itemId) return ele;

                return {
                    ...ele,
                    quantity: args.action === 'inc' ? ele.quantity + 1 : ele.quantity - 1,
                };
            });
        }
    );

    const isEmpty = !("error" in cartItems) && cartItems.length === 0

    const handleQuantityModify = (ele: CartItem, action: 'inc' | 'dec') => {
        startTransition(async () => {
            setOptimisticItems({ itemId: ele.id, action })
            await updateCartItemQuantity(ele.id, ele.priceForOne, action, ele.quantity)
            await fetchCartItems()
        })
    }

    return (
        <>
            <Drawer direction="right">
                <DrawerTrigger asChild >
                    <ShoppingBag size={20} className='hover:text-orange-400 ' />
                </DrawerTrigger>

                <DrawerContent>
                    <DrawerHeader className='border-b'>
                        <DrawerTitle>
                            Shopping Bag
                        </DrawerTitle>
                    </DrawerHeader>
                    {
                        isEmpty ?
                            <>

                                <div className='mx-auto w-50 h-70 mt-50 flex justify-center items-center flex-col space-y-6'>
                                    <ShoppingBag size={70} />
                                    <div>
                                        <p className='mb-3 text-gray-500 text-sm'>Your card is empty</p>
                                        <DrawerClose className='underline cursor-pointer'>
                                            Continue Shopping
                                        </DrawerClose>
                                    </div>
                                </div>

                            </> :
                            <>
                                <div className='overflow-auto h-8/11 pb-10'>
                                    {
                                        ("error" in optimisticItems) ? (
                                            <ErrorInFetching error={optimisticItems.error} />
                                        ) : (
                                            optimisticItems.map((ele) => (
                                                <div key={ele.id} className='w-full h-35 flex p-5 gap-5 '>
                                                    <Image
                                                        width={90}
                                                        height={40}
                                                        alt='image of items'
                                                        src={ele.url}
                                                        className='rounded-xl'
                                                    />
                                                    <div className='flex flex-col justify-between w-full'>
                                                        <div className='text-sm'>
                                                            <p className=''>{ele.name}</p>
                                                            <p className=' text-gray-500'>{ele.size} / {ele.color}</p>
                                                        </div>
                                                        <div className='flex justify-between w-full items-center'>
                                                            <div className='flex items-center gap-2'>
                                                                <Button
                                                                    onClick={() => handleQuantityModify(ele, 'dec')}
                                                                    className='rounded-full flex justify-center items-center dark'
                                                                >
                                                                    <p className='w-2 h-2 flex justify-center items-center'>-</p>
                                                                </Button>
                                                                <p>{ele.quantity}</p>
                                                                <Button
                                                                    onClick={() => handleQuantityModify(ele, 'inc')}
                                                                    className='rounded-full flex justify-center items-center dark'
                                                                >
                                                                    <p className='w-2 h-2 flex justify-center items-center'>+</p>
                                                                </Button>
                                                            </div>
                                                            <div className='flex items-center justify-center space-x-2'>
                                                                <p>{ele.price}$</p>
                                                                <X />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))

                                        )
                                    }
                                </div>
                                <DrawerFooter className='border-t fixed bottom-0 w-full bg-white'>
                                    <div className='w-full '>
                                        <div className='flex justify-between items-center mb-5'>
                                            <p className='text-sm text-gray-500'>Subtotal</p>
                                            <p className='text-xl'>$144</p>
                                        </div>
                                        <Button className='w-full px-10 uppercase h-12'>
                                            <p>proceed to checkout</p>
                                        </Button>
                                    </div>

                                    <DrawerClose asChild>
                                        <Button variant="outline" className='border-transparent'>Continue Shopping</Button>
                                    </DrawerClose>
                                </DrawerFooter>
                            </>
                    }

                </DrawerContent>
            </Drawer>
        </>
    )
}

export default Cart