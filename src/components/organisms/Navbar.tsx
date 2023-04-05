'use client'

import Image from 'next/image'
import React from 'react'

import Home from '@/app/page'
import BookmarkIcon from '@/assets/icon-nav-bookmark.svg'
import HomeIcon from '@/assets/icon-nav-home.svg'
// Icons
import MoviesIcon from '@/assets/icon-nav-movies.svg'
import TvIcon from '@/assets/icon-nav-tv-series.svg'
// @ts-ignore
import Logo from '@/assets/logo.svg?url'
import NavItem from '@/components/atoms/NavItem'

function Navbar() {
  return (
    <nav className='flex items-center justify-between bg-ent-blue-dark-semi p-4 lg:flex-col'>
      <div id='logo' className='relative h-[20px] w-[25px]'>
        <Image src={Logo} alt='logo' fill />
      </div>

      <ul className='flex items-center gap-6'>
        <NavItem>
          <HomeIcon className='h-full w-full fill-white' viewBox='0 0 20 20'/>
        </NavItem>
        <NavItem>
          <MoviesIcon className='h-full w-full fill-ent-blue-grey' viewBox='0 0 20 20'/>
        </NavItem>
        <NavItem>
          <TvIcon className='h-full w-full fill-ent-blue-grey' viewBox='0 0 20 20'/>
        </NavItem>
        <NavItem>
          <BookmarkIcon className='h-full w-full fill-ent-blue-grey' viewBox='0 0 20 20'/>
        </NavItem>
      </ul>

    </nav>
  )
}

export default Navbar
