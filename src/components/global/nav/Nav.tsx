import Link from 'next/link'
import Cart from './Cart'
import PhoneSideBar from './PhoneSideBar'

import { getCartItems } from '../../../../server/cartActions'

const links = [
    {
        name: "home",
        href: "/"
    },
    {
        name: "shop",
        href: "/shop"
    },
    {
        name: "collections",
        href: "/collections"
    },
    {
        name: "about",
        href: "/about"
    },
    {
        name: "contact",
        href: "/contact"
    },
]





function Nav() {

    return (
        <nav className='fixed bg-white w-full h-20 border-b border-b-[#f7757153] z-50'>
            <div className='w-6/7 h-full mx-auto flex items-center justify-between'>
                <div className='w-2/5 h-full hidden items-center justify-evenly md:flex'>
                    {
                        links.map((ele, key) => (
                            <Link
                                key={key}
                                href={ele.href}
                                className=' uppercase text-sm font-light'
                            >
                                {ele.name}
                            </Link>
                        ))
                    }
                </div>
                <div className='md:hidden block'>
                    <PhoneSideBar links={links} />
                </div>
                <div className='sm:w-2/5 w-4/6 h-full flex justify-between items-center '>
                    <h1 className='font-light text-2xl font-serif '>
                        clothes shop
                    </h1>
                    <Cart />
                </div>
            </div>
        </nav>
    )
}

export default Nav