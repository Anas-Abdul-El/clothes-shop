import { Button } from '@base-ui/react'
import { TriangleAlert } from 'lucide-react'
import { redirect } from 'next/navigation'

function ErrorInFetching({ error }: { error: string }) {
    return (
        <div className='p-10 mx-auto border h-fit mt-40 rounded-2xl'>
            <TriangleAlert color='red' size={40} className='mx-auto mb-5' />
            <p className=' capitalize font-bold text-red-500'>{error}</p>
            <Button
                onClick={() => redirect("/shop")}
                className='p-7 py-5 mx-auto mt-10 bg-transparent rounded-none border border-black/20 text-black'
            >
                Refresh the Page
            </Button>
        </div>
    )
}

export default ErrorInFetching