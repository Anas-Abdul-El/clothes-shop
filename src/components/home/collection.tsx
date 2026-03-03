import Image from 'next/image'
import React from 'react'

const collection = [
    {
        id: 1,
        name: "Ramadan collection",
        desc: "elegant and modest clothing for the holy month",
        image: "/images/collections/ramadan.jpg"
    },
    {
        id: 2,
        name: "Daily wear",
        desc: "comfortable and stylish outfits for everyday wear",
        image: "/images/collections/daily-wear.jpg"
    },
    {
        id: 3,
        name: "sets",
        desc: "coordinated outfits for a polished and put-together look",
        image: "/images/collections/sets.jpg"
    },
    {
        id: 4,
        name: "dresses",
        desc: "flowy and feminine dresses for any occasion",
        image: "/images/collections/dresses.jpg"
    },
]

function Collection() {
    return (
        <section className="w-full min-h-screen md:px-40">
            <div className=' container mt-30 text-center mb-20'>
                <p className='uppercase text-gray-500 tracking-[0.2rem] text-xs'>curated for you</p>
                <h1 className="text-5xl capitalize font-serif font-light mt-5">our collections</h1>
            </div>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 space-y-5'>
                {
                    collection.map((item) => (
                        <div key={item.id} className='overflow-hidden h-90 relative mx-5 rounded-lg cursor-pointer group'>
                            <div className='absolute z-2 w-full h-full'>
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    height={800}
                                    width={800}
                                    className='bg-gray-500 w-full h-full group-hover:scale-110 object-cover object-center transition-transform duration-300 ease-in-out transform hover:scale-110'
                                />
                            </div>
                            <div className='z-3 w-full h-full absolute bottom-0 left-0 bg-linear-to-t group-hover:bg-black/20 from-black/80 to-transparent p-5 text-white flex flex-col justify-end'>
                                <h3 className="text-xl font-semibold">{item.name}</h3>
                                <p className="text-gray-500">{item.desc}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Collection