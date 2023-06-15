import React,{useEffect,useState} from 'react'
import VideoCard from './VideoCard'
import { API_VIDEO_LOCATION } from '../utils/constants'
import Shimmer from './Shimmer'
import{Link} from "react-router-dom"
const VideoContainer = () => {

    const [videos,setVideos] = useState();
    
    useEffect(()=>{
        getVideo();
    },[])

    async function getVideo(){
        const data = await fetch(API_VIDEO_LOCATION);
        const json = await data.json();
        setVideos(json.items);
    }
    if(videos==null) return <Shimmer/>
  return (
    <div className='mt-5 flex flex-wrap gap-2'>
        {
            videos.map((value)=>
            <Link to={"/watch?v="+ value.contentDetails?.upload?.videoId} key={value.id}> 
                <VideoCard  videoInfo={value}/>
            </Link>)
        }
        
    </div>
  )
}

export default VideoContainer