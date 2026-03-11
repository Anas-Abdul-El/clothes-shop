import { Loading } from '@/components/global/Loading'
import ProductId from '@/components/shop/productId/Product-id'
import { Suspense } from 'react'

export default async function page({
    params
}: {
    params: Promise<{ productId: string }>
}) {


    return (
        <Suspense fallback={<Loading />}>
            <main className="min-h-screen pt-30 md:p-20 p-10 w-screen grid grid-cols-1 md:grid-cols-2 gap-10">
                <ProductId params={params} />
            </main>
        </Suspense>
    )
}


