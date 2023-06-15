import React from 'react'

const Shimmer = () => {
  return (
    <div className='flex flex-wrap gap-5 mt-5'>
        {
            Array(16).fill(" ").map((e,index)=>
                <div key ={index}>
                    <div className="h-44 w-72 bg-slate-200 rounded-lg" />
                    <div className='flex gap-2'>    
                        <div className='mt-1 rounded-full bg-gray-200 h-8 w-8' />
                        <div >
                            <div className='mt-1 h-4 w-56 bg-gray-200 rounded-lg'></div>
                            <div className='mt-1 h-4 w-28 bg-gray-200 rounded-lg'></div>
                        </div>
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default Shimmer