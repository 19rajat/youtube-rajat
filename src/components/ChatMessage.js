import React from 'react'
import { USER_ICON } from '../utils/constants'

const ChatMessage = ({name,message}) => {
  return (
    <div className='m-3 flex items-center shadow-sm'>
        <div>
            <img className="h-8" src={USER_ICON} alt="user" />
        </div>
        <div className='flex'>
            <h1 className=' mx-2 font-bold'>{name} :</h1> 
            <p>{message}</p>
        </div>
    </div>
  )
}

export default ChatMessage