import CollectionsWrapper from '@/components/collections/Collections-wrapper'
import { Loading } from '@/components/global/Loading'
import { Suspense } from 'react'

function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <main className='md:px-10 lg:px-20'>
        <CollectionsWrapper />
      </main>
    </Suspense>
  )
}

export default Page