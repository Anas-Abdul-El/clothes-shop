"use client"
import { useState } from 'react'
import { Button } from '../ui/button'
import { Settings, TriangleAlert } from 'lucide-react'
import SortedBy from './Sorted-by'
import type { Product } from '@/types'
import ProductWrapper from '../global/Product-wrapper'
import {
  redirect,
  usePathname,
  useRouter,
  useSearchParams
} from 'next/navigation'
import ErrorInFetching from '../global/Error-in-fetching'


type Products = Product[] | {
  error: string;
}

type shopProp = {
  products: Products
}

const Filters = [
  {
    name: 'category',
    options: ['all', 'abbyas', 'dress', 'sets']
  },
  {
    name: 'collection',
    options: ["all", 'ramadan collection', 'daily wear', 'sets', 'dresses']
  },
  {
    name: 'price',
    options: ["all", 'under $100', '$100 - $130', 'over $130']
  }
]


function ShopWrapper({
  products
}: shopProp) {

  const num = 8
  const [isSorted, setIsSorted] = useState(false)

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const {
    price = "all",
    category = "all",
    collection = "all",
  } = Object.fromEntries(searchParams.entries())

  const handleFilter = (title: string, value: string | null) => {
    const params = new URLSearchParams(searchParams);
    params.set(title, value || 'all');
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  }

  const handleSorted = (value: string | null) => {
    const params = new URLSearchParams(searchParams);
    params.set('sorted', value || 'featured');
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  }

  const handleClick = (id: number) => {
    redirect(`/shop/${id}`)
  }




  return (
    <div className='p-20 relative'>
      <div className='md:w-120 my-20'>
        <h1 className='text-4xl md:text-5xl font-serif mb-4'>Shop All</h1>
        <p className='text-sm text-gray-500'>Discover our curated selection of elegant modest fashion pieces, crafted with premium fabrics for the modern woman</p>
      </div>
      <div className='w-full flex flex-col md:flex-row justify-between gap-3 border-b border-b-black/12 pb-7'>
        <div className='flex flex-row gap-4 items-center'>
          <Button
            variant='outline'
            onClick={() => setIsSorted(!isSorted)}
            className='md:hidden px-4 py-4 cursor-pointer'
          >
            <Settings className='mr-1 ' />
            Filter
          </Button>
          <p className='text-sm text-gray-500'> {num} products</p>
        </div>
        <div>
          <SortedBy handleSorted={handleSorted} />
        </div>
      </div>
      <div className="flex w-full ">
        <div className={`flex flex-col w-full md:w-60 ${isSorted ? 'block' : 'hidden'} md:block w-fit `}>
          {
            Filters.map((filter, key) => (
              <div className="mt-7 flex flex-col gap-3" key={key}>
                <h2 className="uppercase">{filter.name}</h2>

                {
                  filter.options.map((ele, key) => (
                    <Button
                      key={key}
                      variant={"outline"}
                      onClick={() => handleFilter(filter.name, ele)}
                      className={`flex justify-start h-10 cursor-pointer capitalize
                          ${(filter.name === 'category' && ele === category)
                          || (filter.name === 'collection' && ele === collection)
                          || (filter.name === 'price' && ele === price) ? 'bg-black text-white' : ''}`}
                    >
                      {ele}
                    </Button>
                  ))
                }

              </div>
            ))
          }
        </div>
        {
          ("error" in products) ? (
            <ErrorInFetching error={products.error} />
          ) : (
            !isSorted && (
              <div className='mt-5 grid grid-cols-1 lg:grid-cols-3 md:p-4 gap-5'>
                {
                  products.map((product, key) => (
                    <ProductWrapper
                      key={key}
                      product={product}
                      type="shop"
                      handleClick={handleClick}
                    />
                  ))
                }
              </div>
            )

          )
        }
      </div>
    </div >
  )
}

export default ShopWrapper

