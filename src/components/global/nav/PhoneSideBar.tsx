"use client"
import {
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    Drawer,
    DrawerTrigger
} from "@/components/ui/drawer"
import { Sidebar, X } from 'lucide-react'
import Link from "next/link"

type Link = {
    name: string;
    href: string;
}

function PhoneSideBar({ links }: {
    links: Link[]
}) {


    return (
        <>
            <Drawer direction="top">
                <DrawerTrigger asChild>
                    <Sidebar />
                </DrawerTrigger>
                <DrawerContent>
                    <DrawerHeader>
                        <DrawerTitle className="font-bold text-2xl">
                            clothes shop
                        </DrawerTitle>
                    </DrawerHeader>
                    <div className="w-full flex flex-col gap-5 mb-1">
                        {
                            links.map((ele, key) => (
                                <div key={key} className=" p-5 uppercase border-b">
                                    <Link href={ele.href}>
                                        {ele.name}
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default PhoneSideBar