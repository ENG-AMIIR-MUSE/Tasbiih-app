import React from 'react'

export default function Impact() {
  return (
<div className='h-[100vh] bg-yellow-400'>

    <h1 className='border-b-4 border-white text-4xl w-max p-3'>Our Impact</h1>

    <div className='flex justify-center items-center h-[100%] mt-[100px] w-full'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            <div className='bg-white w-[200px] h-[200px] flex justify-center items-center flex-col' >
                <h1 className='font-bold'>5+</h1>
                <p>Training Conducts</p>
            </div>
            <div className='bg-white w-[200px] h-[200px] flex justify-center items-center flex-col '>
                <h1 className='font-bold'>5+</h1>
                <p>Training Conducts</p>
            </div>
            <div className='bg-white w-[200px] h-[200px] flex justify-center items-center flex-col' >
                <h1 className='font-bold'>5+</h1>
                <p>Training Conducts</p>
            </div>
        </div>
    </div>
</div>
  )
}
