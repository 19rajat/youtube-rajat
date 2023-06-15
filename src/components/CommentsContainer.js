import React from 'react'
import { USER_ICON } from '../utils/constants'

const commentsData = [
    {
        name:"Rajat Sharma",
        comment:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        reply:[

        ]
    },
    {
        name:"Rajat Sharma",
        comment:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        reply:[
            {
                name:"Rajat Sharma",
                comment:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
                reply:[
                    {
                        name:"Rajat Sharma",
                        comment:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
                        reply:[
                
                        ]
                    },
                ]
            },
            {
                name:"Rajat Sharma",
                comment:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
                reply:[
        
                ]
            },
        ]
    },
    {
        name:"Rajat Sharma",
        comment:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        reply:[

        ]
    },
    {
        name:"Rajat Sharma",
        comment:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        reply:[
            {
                name:"Rajat Sharma",
                comment:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
                reply:[
                    {
                        name:"Rajat Sharma",
                        comment:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
                        reply:[
                
                        ]
                    },
                ]
            },
        ]
    },
    {
        name:"Rajat Sharma",
        comment:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        reply:[
            {
                name:"Rajat Sharma",
                comment:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
                reply:[
                    {
                        name:"Rajat Sharma",
                        comment:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
                        reply:[
                
                        ]
                    },
                ]
            },
        ]
    },
    
]

const Comment = ({data})=>{
    const {name,comment,reply} = data
    return(
    <div className='m-2 p-2 flex items-center gap-2 bg-gray-100'>
        <div>
            <img className="h-8 w-8" src={USER_ICON} alt="user" />
        </div>
        <div className='w-full '>
            <p className='font-bold'>{name}</p>
            <p>{comment}</p>
        </div>
    </div>
    )
}

const CommentsList = ({comments}) =>{
    return (comments.map((comment,index)=>(
        <div>
            <Comment key ={index} data ={comment}/>
            <div className='ml-8 mb-2 border border-l-black'>
                <CommentsList comments = {comment.reply} />
            </div>
        </div>
        )))
    
    
}

const CommentsContainer = () => {
  return (
    <div className=''>
        <h1 className='font-bold my-3'>Add a comment :</h1>
        <CommentsList comments = {commentsData} />
    </div>
  )
}

export default CommentsContainer