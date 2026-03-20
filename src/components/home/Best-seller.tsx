import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import ProductWrapper from '../global/Product-wrapper'
import { getAllProduct } from '../../../server/getAllProduct'
import { type Product } from '@/types'
import ErrorInFetching from '../global/Error-in-fetching'

const bestSellerData: Product[] | { error: string } = await getAllProduct()

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
                    ("error" in bestSellerData) ? (
                        <ErrorInFetching error={bestSellerData.error} />
                    ) : (
                        bestSellerData
                            .filter((product) => product.isBestSeller)
                            .map((product) => (
                                <ProductWrapper
                                    key={product.id}
                                    product={product}
                                    type="bestSeller"
                                />
                            ))
                    )
                }
            </div>
        </section>
    )
}

export default BestSeller