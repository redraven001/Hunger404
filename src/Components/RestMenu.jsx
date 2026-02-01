import React from 'react'
import { IMG_URL, RESTMENUURL } from '../assets/Images/constants';
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdDirectionsBike } from "react-icons/md";
import { useParams } from 'react-router';
import ShimmerUIRestList from './ShimmerUIRestList';

import "../Styles/restMenu.css"
import RestMenuItem from './RestMenuItem';
import useRestMenuData from '../Utils/customHooks/useRestMenudata';
export default function RestMenu() {
    const {resid} = useParams();
    const {restMenuData,resInfo} = useRestMenuData(resid);

    if(resInfo.length===0)return <ShimmerUIRestList/>

  return (
    <div>
        <div className='d-flex p-4 rest-Card justify-content-between'>
            <div>
                <div className='d-flex flex-row align-items-center'>
                    <h3 className='me-3'>{resInfo?.name}</h3>
                    <p>{resInfo?.avgRating}</p>
                    <FaStar/>
                    <p>({resInfo?.totalRatings}+ reviews)</p>
                </div>
                <div>
                    <p><FaLocationDot className='me-1'/>{resInfo?.areaName}</p>
                    <p><MdDirectionsBike className='me-1'/>{resInfo?.sla?.slaString}</p>
                </div>
            </div>
            <img src={IMG_URL + resInfo?.cloudinaryImageId} width={"250px"}/>
        </div>
        <div>
            {restMenuData.map((item)=> <RestMenuItem item={item} key={item?.card?.info?.id}/>)}
        </div>
    </div>
  )
}
