import { Car } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function MainNav() {
  return (
    <div className='hidden md:flex'>
      <Link href="/">
      <Car className='text-red-600'/>
      </Link>
      <nav className='flex items-center gap-3 ml-8 lg:gap-4'>
        <Link href='/projects'>Projects</Link>
        <Link href='/about'>About</Link>
        <Link href='/contact'>Contact</Link>
      </nav>
    </div>
  )
}
