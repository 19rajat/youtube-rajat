import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
import { randomNameGenerator, randomMessageGenerator } from '../utils/helper';
import { RANDOM_NUMBER } from '../utils/constants';

const LiveChat = () => {
    const [liveMessage, setLiveMessage] = useState(" ");
    const dispatch = useDispatch();
    const chatMessages = useSelector(store=>store.chat.messages)

    useEffect(()=>{
        const timer = setInterval(()=>{
            // console.log("API Polling ")
            dispatch(
                addMessage({
                    name:randomNameGenerator(),
                    messages:randomMessageGenerator(RANDOM_NUMBER),
                })
            )
        },1000)

        return ()=>clearInterval(timer)
    },[])
  return (
    <div>
        <div className=' border border-black h-[550px] rounded bg-slate-100 overflow-y-scroll flex flex-col-reverse'>
        
        {
            chatMessages.map((e,index)=><ChatMessage key={index} name={e.name} message={e.messages} />)
        }
        
        </div>

        <form action="" className='mt-2' 
        onSubmit={
            (e)=>{
                e.preventDefault();
                dispatch(
                    addMessage({
                        name:"Rajat Sharma",
                        messages: liveMessage
                    })
                )
                setLiveMessage("")
            }
            }>
            <input 
            type="text" 
            className='w-[370px] px-2 py-1 border border-gray-500 rounded-l-lg shadow'
            value={liveMessage}
            onChange={(e)=>setLiveMessage(e.target.value)}
            />
            <button className='border border-gray-500 px-2 py-1 rounded-r-lg shadow '>Send</button>
        </form>
        
    </div>
    
  )
}

export default LiveChat