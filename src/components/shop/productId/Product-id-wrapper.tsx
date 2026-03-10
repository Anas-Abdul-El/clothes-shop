"use client"
import { Button } from '@/components/ui/button'
import { ArrowLeft, ShoppingBag, MessageCircle, Truck } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const size = [
    "s",
    "m",
    "l",
    "xl"
]

const color = [
    "blush pink",
    "Cream",
    "black",
]

function ProductIdWrapper({
    productId
}: {
    productId: string
}) {

    const [sizeSelected, setSizeSelected] = useState(size[0])
    const [colorSelected, setcolorSelected] = useState(color[0])


    const handleSize = (size: string) => {
        setSizeSelected(size)
    }

    const handleColor = (color: string) => {
        setcolorSelected(color)
    }

    return (
        <>
            <div className="flex flex-col gap-5 md:mt-20 mt-11 md:ml-10 ">
                <Link href="/shop" className="text-sm flex justify-center items-center w-fit h-fit hover:text-black/40">
                    <ArrowLeft className="inline mr-2" />
                    <p>Back to Shop</p>
                </Link>
                <div className="rounded-2xl overflow-hidden md:h-200 h-100">
                    <Image
                        width={900}
                        height={1000}
                        src={"/images/products/product-1.jpg"}
                        alt="product image"
                        className="w-full h-full object-cover"

                    />
                </div>
            </div>
            <div className="flex flex-col gap-5 md:mt-32 mt-11 md:ml-10 ">
                <div className="flex flex-col gap-2">
                    <p className="uppercase text-xs tracking-[0.3rem] text-gray-500">Ramadan Collection</p>
                    <h1 className="capitalize text-4xl font-serif">Blush Silk Abaya</h1>
                </div>
                <p className="text-2xl font-bold">$89</p>
                <p className="pr-8 text-sm text-gray-500">
                    A luxurious blush pink abaya crafted from premium silk fabric. Features elegant flowing silhouette with delicate detailing. Perfect for special occasions and Ramadan gatherings.
                </p>
                <div className="mt-3">
                    <p className=" uppercase mb-1 ">
                        size:
                        <span className='ml-1 text-gray-400'>
                            {sizeSelected}
                        </span>
                    </p>
                    <div className='flex gap-1'>
                        {
                            size.map((ele, id) => (
                                <div
                                    key={id}
                                    onClick={() => handleSize(ele)}
                                    className={`w-13 h-13 rounded-sm flex justify-center items-center  border text-black cursor-pointer ${sizeSelected === ele && "bg-black text-white"}`}
                                >
                                    <p className=' uppercase'>{ele}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="mt-3">
                    <p className=" uppercase mb-1 ">
                        Color:
                        <span className='ml-1 text-gray-400'>
                            {colorSelected}
                        </span>
                    </p>
                    <div className='flex gap-1'>
                        {
                            color.map((ele, id) => (
                                <div
                                    key={id}
                                    onClick={() => handleColor(ele)}
                                    className={` h-fit p-4 py-2 rounded-sm flex justify-center items-center  border text-black cursor-pointer ${colorSelected === ele && "bg-black text-white"}`}
                                >
                                    <p className=' capitalize'>{ele}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='w-full mt-6 pr-10 md:pr-20'>
                    <Button className='w-full py-6 flex justify-center items-center gap-3 cursor-pointer border' >
                        <ShoppingBag />
                        <p className='uppercase'>add to bag</p>
                    </Button>
                    <Button className='w-full bg-transparent py-6 flex justify-center items-center gap-3 cursor-pointer text-green-500 border-green-500 mt-3 hover:bg-green-500 hover:text-white' >
                        <MessageCircle />
                        <p className='uppercase'>order via whatsapp</p>
                    </Button>
                </div>
                <div className='w-9/10 mt-6 p-2 bg-[#F3E9E1] flex items-center rounded-sm'>
                    <div className='p-4'>
                        <Truck />
                    </div>
                    <div className='flex flex-col'>
                        <h3 className='font-bold text-sm'>Delivery Available</h3>
                        <p className='text-xs'>Shipping available all over Lebanon</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductIdWrapper