import React, { useEffect, useState } from 'react';
import {useDispatch} from "react-redux";
import { toggleMenu } from '../utils/appSlice';
import { USER_ICON, YOUTUBE_SEARCH_SUGGESTION } from '../utils/constants';
import {CiSearch} from "react-icons/ci"
import Body from './Body';
import VideoContainer from './VideoContainer';

const Head = () => {

    const [searchQuery, setSearchQuery] = useState("");
    const [searchSuggestion, setSearchSuggestion] = useState([])
    const [showSuggestion, setShowSuggestion] = useState(false)
    

    const dispatch = useDispatch();
    const handleToggleMenu = () =>{
        dispatch(toggleMenu())
    }

    const getSearchSuggestion = async ()=>{
        const data = await fetch(YOUTUBE_SEARCH_SUGGESTION+searchQuery);
        const json = await data.json();
        setSearchSuggestion(json[1]);
    }

    useEffect(()=>{
        const timer = setTimeout(()=>getSearchSuggestion(),200)

        return()=>{
            clearTimeout(timer);
        }

    },[searchQuery])

    return (
    <div className='items-center p-1 m-1 grid grid-flow-col shadow-md'>
        <div className='flex col-span-1 items-center gap-x-4 ml-2'>
            <img 
            onClick={()=>handleToggleMenu()}
            className='h-8 cursor-pointer' src="https://banner2.cleanpng.com/20180628/zaz/kisspng-computer-icons-hamburger-button-menu-new-menu-5b34724be5a1f0.5796308115301637879406.jpg" alt="Ham-pic" />
            <img className='h-11' src="https://thumbs.dreamstime.com/b/youtube-premium-logo-video-sharing-website-icon-eps-vector-illustration-258896955.jpg" alt="Logo" />
        </div>
        <div className='col-span-10 items-center text-center'>
            <input 
            className="w-1/2 px-4 py-1 border border-gray-200 rounded-l-full" 
            type="text" 
            name="Search" 
            placeholder='Search'
            value={searchQuery}
            onChange={(e)=>setSearchQuery(e.target.value)}
            onFocus={()=>setShowSuggestion(true)}
            onBlur={()=>setShowSuggestion(false)}
            />
            <button className='border border-gray-200 rounded-r-full px-2 py-1 bg-gray-50 text-black'>🔍</button>
            {showSuggestion && 
            <div className='fixed ml-[274px] bg-white px-3 py-2 rounded-lg border border-gray-200 shadow-lg w-[37.6%]'>
                <ul className='text-left'>
                {searchSuggestion.map((e)=>
                <div className='flex items-center gap-2'><CiSearch /><li key = {e} className='hover:bg-slate-100'>{e}</li></div>)}
                </ul>
            </div>
            }
        </div>
        
        <div className=''>
            <img className="h-8" src={USER_ICON} alt="user" />
        </div>
    </div>
    )
}

export default Head