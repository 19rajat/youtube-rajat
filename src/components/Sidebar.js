import React from 'react'
import {useSelector} from "react-redux"
import{AiFillHome} from "react-icons/ai"
import{MdSlowMotionVideo} from "react-icons/md"
import{BsBell} from "react-icons/bs"
import{SlMusicToneAlt} from "react-icons/sl"
import{BiLibrary} from "react-icons/bi"
import{HiDownload} from "react-icons/hi"
import {Link} from "react-router-dom"


const Sidebar = () => {
    const isMenuOpen  = useSelector(store=>store.app.isMenuOpen)
    if(!isMenuOpen) return (null
        // <div>
        //     <ul>
        //     <li className='ml-5 font-bold text-xs'><AiFillHome/>Home</li>
        //     <li className='m-5 text-xs'><MdSlowMotionVideo/>Shorts</li>
        //     <li className='m-5 text-xs'><BsBell/>Subscription</li>
        //     <li className='m-5 text-xs'><SlMusicToneAlt/>Youtube Music </li>
        //     <li className='m-5 text-xs'><BiLibrary/>Library</li>
        //     <li className='m-5 text-xs'><HiDownload/>Downloads</li>
        //     </ul>
        // </div>
        );
    return (
    <div>
        <ul>
            <li className='ml-5 font-bold flex items-center gap-3'><Link to="/"><AiFillHome/>Home</Link></li>
            <li className='m-5 flex items-center gap-3'><MdSlowMotionVideo/>Shorts</li>
            <li className='m-5 flex items-center gap-3'><BsBell/>Subscription</li>
            <li className='m-5 flex items-center gap-3'><SlMusicToneAlt/>Youtube Music </li>
            <li className='m-5 flex items-center gap-3'><BiLibrary/>Library</li>
            <li className='m-5 flex items-center gap-3'><HiDownload/>Downloads</li>
        </ul>
    </div>
    )
}

export default Sidebar