import React from 'react'

import '../Styles/resCard.css';
import { IMG_URL } from '../assets/Images/constants';
export default function RestaurantCard({resData}) {
  return (
    <div id='res-card' className='d-flex flex-column'>
      <img height="275px" width="350px" src={ IMG_URL +resData.info.cloudinaryImageId}/>
      <div className='my-3'>
        <h4 className='text-center'>{resData?.info.name}</h4>
        <h5 className='mx-3 mt-2'>{resData?.info.cuisines.slice(0,3).join(", ")}</h5>
        <h5 className='mx-3 mt-1'>{`${resData?.info?.avgRating} stars (${resData?.info?.totalRatingsString})`}</h5>
        <h5 className='mx-3 mt-1'>{resData?.info?.costForTwo}</h5>
        <h5 className='mx-3 mt-1'>{`${resData?.info?.sla?.deliveryTime} minutes`}</h5>
      </div>
    </div>
  )
}
