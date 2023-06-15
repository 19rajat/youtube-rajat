import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <ul className='flex text-gray-700 '>
            <li className='mr-8'><button className='bg-gray-100 rounded-lg px-2 py-1 '>{name}</button></li>
        </ul>
    </div>
  )
}

export default Button