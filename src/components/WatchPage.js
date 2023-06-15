import React,{useEffect,useState} from 'react'
import{useSearchParams} from "react-router-dom"
import {useDispatch} from "react-redux"
import { closeMenu } from '../utils/appSlice'
import CommentsContainer from './CommentsContainer'
import LiveChat from './LiveChat'
import RelatedVideo from './RelatedVideo'
import { API_KEY,VideoDetails_API,CHANNELDETAILS_API } from '../utils/constants'
import ShimmerWatchPage from '../utils/ShimmerWatchPage'

const WatchPage = () => {

    const [searchParams] = useSearchParams(); // console.log(searchParams.get("v"))
    const dispatch = useDispatch();
    const [videoDetails, setVideoDetails] = useState("")
    const [channelDetails, setChannelDetails] = useState("")

    useEffect(()=>{
        dispatch(closeMenu());
        getVideoDescription();
    },[])

    const getVideoDescription = async ()=> {
            const data = await fetch(VideoDetails_API+searchParams.get("v")+"&key="+API_KEY)
            const json = await data.json();
            const data2 = await fetch(CHANNELDETAILS_API+"UCaUg-59U5OpRE1DTB7fy5Qg"+"&key="+API_KEY)
            const json2 = await data2.json();
            setVideoDetails(json)
            setChannelDetails(json2)
    }
    
    if(!videoDetails || !channelDetails)return<ShimmerWatchPage/>

    return (
    <div className='ml-10 flex w-full'>
        <div className='mt-5 h-full w-[1000px]'>
            <iframe 
            height='550px'
            width="1000px"
            src={"https://www.youtube.com/embed/"+searchParams.get("v")}
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
            autoPlay
            >
            </iframe>
            <div className='mt-3'>
                <h1 className='font-bold'>{videoDetails.items[0].snippet.title}</h1>
                <div className='mt-1 flex items-center'>
                    <img src={channelDetails.items[0].snippet.thumbnails.default.url} className='h-8 w-8 rounded-full' alt="" />
                    <div className='ml-2'>
                        <h1 className='font-bold'>{videoDetails.items[0].snippet.channelTitle}</h1>
                        <h3 className="text-xs">{channelDetails?.items[0]?.statistics.subscriberCount/1000}K subscriber</h3>
                    </div>
                    <button className='p-3 ml-10 text-sm text-white border bg-red-500 rounded-r-full rounded-l-full'>Subscribe</button>
                </div>
                <div className='p-2 text-xs mt-5 w-full border bg-slate-300 rounded-xl hover:bg-slate-100'>
                    <p>{videoDetails.items[0].statistics.viewCount/1000}k Views</p>
                    <p>{videoDetails.items[0].snippet.publishedAt}</p>
                </div>
            </div>
            <CommentsContainer/>
        </div>
        <div className='w-full m-5'>
            <div className='flex flex-col-reverse'>
                <LiveChat/>
            </div>
            <div className='mt-5'>
                <RelatedVideo/>
            </div>
        </div>
    </div>
    )
}

export default WatchPage