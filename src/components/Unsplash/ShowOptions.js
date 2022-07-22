import React, { useState } from 'react'
import {AiOutlineHeart,AiFillHeart} from "react-icons/ai"
import {FiDownload} from "react-icons/fi"




const ShowOptions = ({ links}) => {

  const [isFav, setIsFav] = useState(false);
  return (
      <div className='option-btns'>
        <button className={`${isFav? 'fav-btn active' : 'fav-btn'}`} onClick={()=>{setIsFav(!isFav)}}>{isFav ? <AiFillHeart/>:<AiOutlineHeart/>}</button>
        <a className='down-btn' href={links.download} target="_blank" download="unsplash" ><FiDownload/></a>

      </div>
  )
}

export default ShowOptions