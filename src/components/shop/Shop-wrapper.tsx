"use client"
import { useState } from 'react'
import { Button } from '../ui/button'
import { Settings } from 'lucide-react'
import SortedBy from './Sorted-by'
import ProductWrapper from '../global/Product-wrapper'

const Filters = [
  {
    name : 'Category',
    options : ['All', 'Abbyas', 'Dress', 'Sets']
  },
  {
    name : 'Collection',
    options : ["All", 'Ramadan Collection', 'Daily Wear', 'Sets','dresses']
  },
  {
    name:'Price',
    options : ["All" , 'Under $100', '$100 - $130', 'Over $130']
  }
]

const products = [
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
    {
        id: 6,
        name: 'Product 6',
        price: '$69.99',
        isFeatured: false,
        isSale: false,
        image: '/images/products/product-6.jpg',
    },
    {
        id: 7,
        name: 'Product 7',
        price: '$79.99',
        isFeatured: true,
        isSale: true,
        image: '/images/products/product-7.jpg',
    },
    {
        id: 8,
        name: 'Product 8',
        price: '$89.99',
        isFeatured: false,
        isSale: false,
        image: '/images/products/product-8.jpg',
    },
]

function ShopWrapper() {

  const num = 8

  const [ isSorted , setIsSorted ] = useState(false)

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
            <Settings className='mr-1 '/>
            Filter
          </Button>
          <p className='text-sm text-gray-500'> {num} products</p>
        </div>
        <div>
          <SortedBy />
        </div>
      </div>
      <div className="flex w-full ">
            <div className={`flex flex-col w-full md:w-60 ${ isSorted ? 'block' : 'hidden' } md:block w-fit ` }>
            {
              Filters.map((filter, key) => (
            <div className="mt-7 flex flex-col gap-3" key={key}>
              <h2 className="uppercase">{filter.name}</h2>
              
                  {
                    filter.options.map((ele,key) => (
                      <Button className={`flex justify-start h-10 cursor-pointer`} key={key} variant={"outline"}>
                        {ele}
                      </Button>
                    ))
                  }
                
            </div>
              ))
            }
        </div>
        {
          !isSorted && (
          <div className='mt-5 grid grid-cols-1  lg:grid-cols-3 md:p-4 gap-5'>
            {
              products.map((product, key) => (
                <ProductWrapper key={key} product={product} type="shop" />
              ))
            }
        </div>
          ) 
        }
      </div>
    </div>
  )
}

export default ShopWrapper