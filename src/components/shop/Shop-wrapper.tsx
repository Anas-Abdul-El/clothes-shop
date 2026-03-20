"use client"
import { useState } from 'react'
import { Button } from '../ui/button'
import { Settings } from 'lucide-react'
import SortedBy from './Sorted-by'
import type { Product } from '@/types'
import ProductWrapper from '../global/Product-wrapper'
import {
  usePathname,
  useRouter,
  useSearchParams
} from 'next/navigation'
import ErrorInFetching from '../global/Error-in-fetching'
import EmptyWrapper from '../global/Empty'
import Link from 'next/link'
import { getItem, setItem } from '@/utils/localstorage'

type Products = Product[] | {
  error: string;
}

type shopProp = {
  products: Products
}

const Filters = [
  {
    name: 'collection',
    options: ["all", 'ramadan collection', 'daily wear', 'sets', 'dress']
  },
  {
    name: 'price',
    options: ["all", 'under $100', '$100 - $130', 'over $130']
  }
]

const isUser = getItem("user")

if (!isUser) {
  const Id = new Date()
  setItem("user", Id.toString().split(" ")[4].replaceAll(":", ""))
}

function ShopWrapper({
  products
}: shopProp) {

  if ("error" in products) return <ErrorInFetching error={products.error} />

  const [isSorted, setIsSorted] = useState(false)

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const {
    price = "all",
    collection = "all",
    sorted
  } = Object.fromEntries(searchParams.entries())

  const HandleFilter = ({ title, value, className, ele }: { title: string, value: string | null, className: string, ele: string }) => {
    const params = new URLSearchParams(searchParams);
    params.set(title, value || 'all');
    return <Link href={`${pathname}?${params.toString()}`} className={className + " flex justify-start h-10 cursor-pointer capitalize p-2 rounded-xl"}>{ele}</Link>
  }

  const handleSorted = (value: string | null) => {
    const params = new URLSearchParams(searchParams);
    params.set('sorted', value || 'featured');
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  }

  const handleSortingArr = products.sort((a, b) => {
    switch (sorted) {
      case "price: low to high":
        return a.price - b.price;
      case "price: high to low":
        return b.price - a.price;
      default:
        return a.price
    }
  })

  const collectionFiltering = handleSortingArr.filter(ele => {
    if (collection === "all") {
      return ele;
    } else {
      return ele.collection === collection
    }
  })

  const finalFiltering = collectionFiltering.filter(ele => {
    switch (price) {
      case "all":
        return ele

      case "under $100":
        return ele.price < 100

      case "$100 - $130":
        return ele.price >= 100 && ele.price < 130

      case "over $130":
        return ele.price >= 130
    }
  })

  const num = finalFiltering.length

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
                    <HandleFilter
                      key={key}
                      title={filter.name} value={ele} ele={ele}
                      className={`${(filter.name === 'collection' && ele === collection)
                        || (filter.name === 'price' && ele === price) ? 'bg-black text-white' : ''}`}
                    />
                  ))
                }

              </div>
            ))
          }
        </div>
        {
          (num === 0) ? (
            <div className='w-full mt-40'>
              <EmptyWrapper />
            </div>
          ) : (
            !isSorted && (
              <div className='mt-5 grid grid-cols-1 lg:grid-cols-3 md:p-4 gap-5'>
                {
                  finalFiltering.map((product, key) => (
                    <ProductWrapper
                      key={key}
                      product={product}
                      type="shop"
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

