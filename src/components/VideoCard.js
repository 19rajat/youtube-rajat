import React from 'react'
import {BsCheckCircleFill} from "react-icons/bs"

const VideoCard = ({videoInfo}) => {
    const{snippet} = videoInfo
     const {channelTitle,publishedAt,thumbnails,title} = snippet; 
    //  description,
     const {high,maxres} = thumbnails;


    return (
    <div className='flex flex-wrap gap-3'>
        <div>
            <img src={high.url} className="h-44 w-72 rounded-lg" alt="thumbnail"/>
            <div className='flex gap-2'>    
                <img src={maxres.url} className='mt-1 rounded-full bg-gray-200 h-8 w-8' alt="channelimg"/>
                <div className='mt-2'>
                    <h1 className='text-xs font-bold w-64  overflow-hidden '>{title}</h1>
                    <h3 className='flex text-xs w-64 font-bold overflow-hidden items-center gap-2 '>{channelTitle}<BsCheckCircleFill/></h3>
                    {/* <p className='mt-1 h-4 w-28 bg-gray-200 rounded-lg'>{description}</p> */}
                    <h1 className='text-xs'>{publishedAt}</h1>
                </div>
            </div>  
        </div>
    </div>
    )
}

export default VideoCard