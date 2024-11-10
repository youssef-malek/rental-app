import { AlignJustify, Car } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function MobileNav() {
  return (
    <div className='md:hidden'>
    <Sheet>
      <SheetTrigger>
        <AlignJustify />
      </SheetTrigger>
      
      <SheetContent side='left'>
      <SheetHeader>
      <SheetTitle></SheetTitle>
      <SheetDescription>
      </SheetDescription>
    </SheetHeader>
        <SheetHeader></SheetHeader>
        <Link href='/'>
          <Car className='text-red-500' />
        </Link>
        <nav className='flex flex-col gap-3 lg:gap-4 mt-6'>
          <Link href='/project'>Project</Link>
          <Link href='/about'>About</Link>
          <Link href='/contact'>Contact</Link>
        </nav>
      </SheetContent>
    </Sheet>
  </div>
  );
}
