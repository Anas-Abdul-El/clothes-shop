import ShopWrapper from '@/components/shop/Shop-wrapper'
import { getAllProduct } from '../../../server/getAllProduct'
import { Suspense } from 'react'
import { Loading } from '@/components/global/Loading'


const ProductsFetching = async () => {
  const products = await getAllProduct()
  return <ShopWrapper products={products} />

}


async function Shop() {

  return (
    <Suspense fallback={<Loading />}>
      <main className='w-full md:px-20'>
        <ProductsFetching />
      </main>
    </Suspense>
  )
}

export default Shop