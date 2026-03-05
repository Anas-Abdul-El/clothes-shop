import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import BestSellerWrapper from './Best-seller-wrapper'

const bestSellerData = [
    {
        id: 1,
        name: 'Product 1',
        price: '$29.99',
        isFeatured: true,
        isSale: true,
        image: '/images/products/product-1.jpg',
    },
    {
        id: 2,
        name: 'Product 2',
        price: '$39.99',
        isFeatured: false,
        isSale: true,
        image: '/images/products/product-2.jpg',
    },
    {
        id: 3,
        name: 'Product 3',
        price: '$49.99',
        isFeatured: false,
        isSale: false,
        image: '/images/products/product-3.jpg',
    },
    {
        id: 4,
        name: 'Product 4',
        price: '$59.99',
        isFeatured: true,
        isSale: false,
        image: '/images/products/product-4.jpg',
    },
    {
        id: 5,
        name: 'Product 5',
        price: '$59.99',
        isFeatured: false,
        isSale: true,
        image: '/images/products/product-5.jpg',
    },
]

function BestSeller() {
    return (
        <section className="w-full min-h-screen px-6 md:px-40 bg-[#F7F1EB] mt-20">
            <div className="py-30 w-full h-60 flex flex-col md:flex-row items-center justify-between">
                <div>
                    <p className=' uppercase text-gray-500 tracking-[0.3rem] text-xs'>most loved</p>
                    <h2 className='text-5xl capitalize font-serif mt-3 font-extralight'>best seller</h2>
                </div>
                <div>
                    <Link href="/shop" className="hover:text-[#F77571] group font-bold flex gap-1">
                        <p>view all</p>
                        <ArrowRight className='group-hover:translate-x-2 duration-100 transition-all' />
                    </Link>
                </div>
            </div>
            <div className='w-full h-auto grid grid-cols-2 lg:grid-cols-4 gap-x-5 space-y-3 py-10'>
                {
                    bestSellerData.map((product) => (
                        <BestSellerWrapper key={product.id} bestSellerData={product} />
                    ))
                }
            </div>
        </section>
    )
}

export default BestSeller