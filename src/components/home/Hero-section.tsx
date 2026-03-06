import { Button } from '../ui/button'
import Image from 'next/image'

function HeroSection() {
    return (
        <section className=' grid grid-cols-1 md:grid-cols-2 mt-20 gap-10 bg-[#F3E9E1] px:20 lg:px-40'>

            <div className='flex flex-col gap-6 px-10'>
                <p className='uppercase text-gray-500 text-xs tracking-[0.3em] mt-30'>New Season Collection</p>
                <h1 className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif leading-tight text-balance'>Elegant Modest Fashion for Every Occasion</h1>
                <p className='text-xl text-gray-500'>Discover premium quality pieces designed for the modern woman who values both style and modesty. Available all over Lebanon.</p>
                <div className='flex flex-col lg:flex-row gap-4'>
                    <Button className=' uppercase p-6 cursor-pointer'>Shop Now</Button>
                    <Button className='uppercase p-6 bg-transparent cursor-pointer mx-4 text-black border  border-black/20 hover:bg-black hover:text-white'>View Collection</Button>
                </div>
            </div>
            <div>
                <Image
                    alt="Hero Image"
                    src="/images/hero.jpg"
                    width={700}
                    height={700}
                    className='object-cover rounded-2xl h-screen '
                />
            </div>
        </section>
    )
}

export default HeroSection