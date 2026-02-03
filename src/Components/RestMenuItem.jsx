import React from 'react'
import { FaCircle } from "react-icons/fa6"
import { FaStar } from "react-icons/fa";
import '../Styles/restMenu.css'
import { IMG_URL } from '../assets/constants.js';
import altImg from 'url:../assets/Images/altImg.png'

export default function ({item}) {
   // console.log(item.card.info);
   // {item?.card?.info?.name}
   const price = item?.card?.info?.price??item?.card?.info?.defaultPrice;
   const ratingInfo = item?.card?.info?.ratings?.aggregatedRating

   const getDot = ()=>{
        const isVeg=item?.card?.info?.isVeg;
        return(
            <FaCircle className={isVeg ===1 ? "veg-dot" : "non-veg-dot"}/>
        )
   } 
  return (
    <div className='py-3 px-5 d-flex flex-row card-item justify-content-between'>
        <div className='d-flex flex-column'>
            <h5>{item?.card?.info?.name}</h5>
            <div className='ms-4 d-flex flex-column'>
                <div>{getDot()}</div>
                <span>₹{Math.floor(price/100)}</span>
                {<span>{ratingInfo?.rating} <FaStar/> {`(${ratingInfo?.ratingCountV2}) reviews`}</span>}
                <div>{item?.card?.info?.description}</div>
            </div>
        </div>
        <div className='d-flex flex-column justify-content-center'>
            <img src={IMG_URL+item?.card.info?.imageId} width={"200px"} height={"150px"} onError={(e)=>e.target.src=altImg}/>
            <div className='d-flex justify-content-center mt-1' ><button className='add-btn'>Add</button></div>
        </div>
    </div>
  )
}
