import Image from "next/image"
import { Button } from "../ui/button"
import Link from "next/link"


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


function CollectionsWrapper() {
  return (
    <div className='p-8 md:p-9 lg:p-20 relative'>
      <div className='md:w-120 my-20'>
        <h1 className='text-4xl md:text-5xl font-serif mb-4'>Our Collections</h1>
        <p className='text-sm text-gray-500'>Explore our carefully curated collections, each designed to bring elegance and modesty to every moment of your life.</p>
      </div>
      <section className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5">
        {
            collection.map((item) => (
                <div key={item.id} className='overflow-hidden relative mx-5 rounded-lg cursor-pointer group'>
                    
                        <Image
                            src={item.image}
                            alt={item.name}
                            height={800}
                            width={800}
                            className='bg-gray-500 w-full h-full group-hover:scale-110 object-cover object-center transition-transform duration-300 ease-in-out transform hover:scale-110'
                        />
                    
                    <div className=" absolute z-10 w-full text-white h-full top-0 flex justify-center items-center flex-col gap-5 bg-black/30 p-10 text-center">
                        <div className="flex flex-col items-center gap-1">
                            <h3 className="text-xl lg:text-3xl font-semibold">{item.name}</h3>
                        <p className=" text-white/70">{item.desc}</p>
                        </div>
                        <Link href={"/shop"} className="px-4 py-2 placeholder-sky-300 uppercase bg-transparent rounded-sm border-white/50 group-hover:border-white border-2 group-hover:bg-white group-hover:text-black transition-colors duration-300 ease-in-out">
                            <p>shop now</p>
                        </Link>
                    </div>
                </div>  
            ))
        }

      </section>
    </div>
  )
}

export default CollectionsWrapper