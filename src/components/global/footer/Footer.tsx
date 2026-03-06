import { Instagram, Locate, MessageSquare, PhoneCall } from 'lucide-react';
import Link from 'next/link';

function Footer() {
    return (
        <footer className='w-full bg-[#180F09] text-white/40 p-15 px-20 md:px-40 relative mb-0'>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                <div>
                    <h3 className='text-lg font-bold mb-4 text-white font-serif'>Company</h3>
                    <p>Elegant modest fashion for every occasion. Premium quality pieces designed for the modern woman who values both style and modesty.</p>
                </div>
                <div>
                    <h3 className='  mb-4 text-white uppercase'>Quick Links</h3>
                    <ul className='space-y-3'>
                        <li><Link href="#" className='hover:text-white text-sm'>Shop All</Link></li>
                        <li><Link href="#" className='hover:text-white text-sm'>Collections</Link></li>
                        <li><Link href="#" className='hover:text-white text-sm'>About Us</Link></li>
                        <li><Link href="#" className='hover:text-white text-sm'>Contact</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className='mb-4 text-white uppercase'>Collections</h3>
                    <ul className='space-y-3'>
                        <li><Link href="#" className='hover:text-white text-sm'>Ramadan Collection</Link></li>
                        <li><Link href="#" className='hover:text-white text-sm'>Daily Wear</Link></li>
                        <li><Link href="#" className='hover:text-white text-sm'>Sets</Link></li>
                        <li><Link href="#" className='hover:text-white text-sm'>Dresses</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className='mb-4 text-white uppercase'>Contact Us</h3>
                    <ul className='space-y-3'>
                        <li>
                            <a href="#" className='hover:text-white text-sm flex gap-2 items-center'>
                                <Locate size={17} />
                                <p>123 Main Street, City, Country</p>
                            </a>
                        </li>
                        <li>
                            <a href="#" className='hover:text-white text-sm flex gap-2 items-center'>
                                <PhoneCall size={17} />
                                <p>(123) 456-7890</p>
                            </a>
                        </li>
                        <li>
                            <a href="#" className='hover:text-white text-sm flex gap-2 items-center'>
                                <MessageSquare size={17} />
                                <p>info@company.com</p>
                            </a>
                        </li>
                        <li>
                            <a href="#" className='hover:text-white text-sm flex gap-2 items-center'>
                                <Instagram size={17} />
                                <p>@Instagram</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <span className='absolute h-[0.2px] w-4/5 border-white/10 border mt-15'></span>
            <div className="flex w-full justify-between mt-25 mb-5 gap-5 flex-col md:flex-row">
                <p className='text-sm text-white/40'>© 2024 Company Name. All rights reserved.</p>
                <p className="text-sm text-white/40">Delivery available all over Lebanon</p>
            </div>
        </footer>
    )
}

export default Footer