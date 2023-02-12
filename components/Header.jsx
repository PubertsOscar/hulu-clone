import React from 'react'
import Image from 'next/image'
import huluLogo from "../assets/huluLogo.png"
import HeaderItem from './HeaderItem'
import { HomeIcon, BoltIcon, MagnifyingGlassIcon, RectangleStackIcon, UserIcon, CheckBadgeIcon  } from "@heroicons/react/24/outline"


function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
        <div className='flex  flex-grow justify-evenly max-w-2xl '>
        <HeaderItem title="HOME" Icon={HomeIcon} className="flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-white h-8 mb-1 group-hover:animate-bounce opacity-0 group-hover:opacity-100 tracking-widest " />
        <HeaderItem title="TRENDING" Icon={BoltIcon} />
        <HeaderItem title="VERIFIED" Icon={CheckBadgeIcon} />
        <HeaderItem title="COLLECTIONS" Icon={RectangleStackIcon} />
        <HeaderItem title="SEARCH" Icon={MagnifyingGlassIcon} />
        <HeaderItem title="ACOUNT" Icon={UserIcon} />
        </div>
        <Image
        className='object-contain'
        src={huluLogo}
        alt=""
        width={200}
        height={100}
        />
    </header>
  )
}

export default Header