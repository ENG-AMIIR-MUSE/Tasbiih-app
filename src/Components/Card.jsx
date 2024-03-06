import React from 'react'

export default function ({title,i, text}) {
  return (
    <div className=' '>
        <div className=''>

        <div className='border-2  rounded-lg flex flex-col  justify-center items-center p-6'>
        <div className='px-[50px] flex  flex-col  '>

        {i}
            <h1 className='text-center font-bold text-xl sm:text-1xl py-2'>{title}</h1>
            <p className='text-center'>{text}</p>
        </div>
        </div>
    
        </div>
    </div>
  )
}
