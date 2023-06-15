import React from 'react'

const ShimmerWatchPage = () => {
  return (
    <div className='mt-5 ml-10 flex w-full '>
        <div>
            <div className='border border-gray-200 bg-slate-100 h-[550px] w-[1000px]'>
            </div>
            <h1 className='h-8 w-32 mt-5 border bg-slate-100'></h1>
        </div>
        <div className='ml-5 w-full'>
            <div className='border border-black h-[550px] rounded bg-slate-100'>

            </div>
            <div className='mt-5 border border-black h-[550px] rounded bg-slate-100'>
            </div>
        </div>
        
    </div>
    
  )
}

export default ShimmerWatchPage