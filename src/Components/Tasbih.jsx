import React, { useState } from 'react'

export default function Tasbih() {
    const [counter,setCounter] =  useState(0)
  return (
    <div className='flex flex-col h-screen justify-center items-center    '>

        <div className='text-7xl font-bold mb-10'>{counter}</div>
        <div className='flex  gap-3'>

        <button  onClick={()=>{
            setCounter((count)=>count+1)
        }} className='bg-blue-900 text-white px-3 py-2 rounded-lg'>Incement</button>
        <button onClick={()=>{
            setCounter((count)=>count = 0)
        }} className='bg-green-900 text-white px-3 py-2 rounded-lg'>reset</button>
        <button  onClick={()=>{
            setCounter((count)=>count-1)
        }}className='bg-red-900 text-white px-3 py-2 rounded-lg'>decrement</button>
        </div>

    </div>
  )
}
