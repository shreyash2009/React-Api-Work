import React, { useState } from 'react'
import ShowOptions from './ShowOptions';
const ImageShower = ({list}) => {
    const [showOpt,setShowOtp]= useState(false)
  return (
    <div className='img-viewer'>
    {
        list.map((item)=>{
            const {id,urls,links} = item;
            return(
                <article className='img-container' key={id} onMouseOut={()=>{setShowOtp(false)}} onMouseOver={()=>{setShowOtp(true)}}> 
                <img src={urls.small} alt="img" className='img' />
                {showOpt && (<ShowOptions links={links} {...item} />)}
            </article>
            )
        })
    }
    </div>
  )
}

export default ImageShower