import React, { useState } from 'react'
import ShowCase from './ShowCase'

export default function Header() {
    const [hide,setHide] =  useState(false)
  return (
    <div className='bg-yellow-400 w-full '>
    <div className='bg-yellow-400  px-[30px] h-screen max-w-[1200px] m-auto'>
        <div className='flex justify-between h-[100px]'>

        <div className='flex items-center'>

        <h1 className='text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold'>Xalka</h1>
        </div>
        <ul className='flex  gap-10 items-center text-4xl hidden sm:flex '>
            <li className='hover:text-white'>Home</li>
            <li className='hover:text-white'>About</li>
            <li className='hover:text-white'>Contact Us</li>
         
        </ul>
        <ul className= { hide ? "flex flex-col bg-white absolute top-[100px] w-[90%] p-3 hidden " :"flex flex-col bg-white absolute top-[100px] w-[90%] p-3 "} >
            <li className='hover:text-white'>Home</li>
            <li className='hover:text-white'>About</li>
            <li className='hover:text-white'>Contact Us</li>
         
        </ul>
        <div className='flex items-center sm:hidden cursor-pointer' onClick={()=>setHide(!hide)}>

        <i class="fa fa-bars text-4xl" aria-hidden="true"></i>
        </div>
        </div>
        <ShowCase/>
    </div>
    </div>
  )
}
