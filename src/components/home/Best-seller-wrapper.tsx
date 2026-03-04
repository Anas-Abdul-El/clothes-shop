"use client"
import Image from 'next/image';
import { ShoppingBag } from 'lucide-react';
import Cart from '../global/nav/Cart';

function BestSellerWrapper({
    bestSellerData,
}: {
    bestSellerData: {
        id: number;
        name: string;
        price: string;
        image: string;
        isFeatured: boolean;
        isSale: boolean;
    }
}) {


    return (
        <div className='w-full h-110 relative group'>
            <div className="w-20 h-20 flex flex-col justify-start items-center absolute p-3 gap-1">
                {bestSellerData.isFeatured && <p className='bg-black text-white text-[0.6rem] uppercase p-1 px-3 rounded-4xl z-10'>new</p>}
                {bestSellerData.isSale && <p className='bg-red-500 text-white text-[0.6rem] uppercase p-1 px-3 rounded-4xl z-10'>sale</p>}
            </div>
            <div className='w-full h-6/7 overflow-hidden object-cover rounded-xl'>
                <Image
                    width={600}
                    height={600}
                    src={bestSellerData.image}
                    alt={bestSellerData.name}
                    className=' w-full h-full object-cover object-center rounded-xl group-hover:scale-105 duration-300' />
            </div>
            <div
                className={`cursor-pointer bg-white z-10 absolute right-4 bottom-20 p-3 rounded-full transition-all 
                           duration-300 opacity-0 group-hover:opacity-100 translate-y-5 group-hover:translate-y-0`}
            >
                <Cart />
            </div>
            <div className='p-1'>
                <p className='text-gray-500 text-sm'>{bestSellerData.name}</p>
                <p className='text-lg font-bold'>{bestSellerData.price}</p>
            </div>
        </div>
    )
}

export default BestSellerWrapper