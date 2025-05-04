import { useState } from 'react'
import { FaHeart,FaRegHeart } from "react-icons/fa";

interface Props{
  onClick:()=>void;
}

const Likebutton = ({onClick}: Props) => {
  
  const [isIn,setIsIn]= useState(false);
  const toggle = ()=>{
    setIsIn(!isIn);
    onClick();
  }
  return (
   isIn === true ? (<div>
      <FaHeart color='#ff6b81' size={20} onClick={toggle}/>      
    </div>):
    (
      <FaRegHeart color='#ff6b81' size={20} onClick={toggle}/>
    )
  )
  
}

export default Likebutton
