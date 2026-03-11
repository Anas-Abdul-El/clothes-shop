import ShopWrapper from '@/components/shop/Shop-wrapper'
import { getAllProduct } from '../../../server/getAllProduct'
import { Suspense } from 'react'
import { Loading } from '@/components/global/Loading'


const ProductsFetching = async () => {
  const products = await getAllProduct()
  return <ShopWrapper productss={products} />

}


async function Shop() {

  return (
    <main className='w-full md:px-20'>
      <Suspense fallback={<Loading />}>
        <ProductsFetching />
      </Suspense>
    </main>
  )
}

export default Shop