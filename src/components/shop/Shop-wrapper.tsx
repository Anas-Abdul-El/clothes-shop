"use client"
import ShopItems from '@/components/shop/Shop-items'
import { useState } from 'react'
import { Button } from '../ui/button'
import { Settings } from 'lucide-react'
import SortedBy from './Sorted-by'

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
function ShopHeader() {

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
        <div>
          <ShopItems />
        </div>
      </div>
    </div>
  )
}

export default ShopHeader