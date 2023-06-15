import React from 'react'
import Button from './Button'

const ButtonList = () => {
    const buttonName = ["All","Trending","Mixes","Music","Gaming", "Live", "Bollywood", "Comedy", "News", "Health"]

    return (
    <div className='flex'>
        {
            buttonName.map((value,index)=>(<Button key ={index} name={value}/>))
        }
    </div>
    )
}

export default ButtonList