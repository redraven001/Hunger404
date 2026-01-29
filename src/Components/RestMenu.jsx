import React, { useEffect, useState } from 'react'
import { IMG_URL, RESTMENUURL } from '../assets/Images/constants';
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdDirectionsBike } from "react-icons/md";
import { useParams } from 'react-router';
import ShimmerUIRestList from './ShimmerUIRestList';

import "../Styles/restMenu.css"
import RestMenuItem from './RestMenuItem';
export default function RestMenu() {
    const [restMenuData, setRestMenuData] = useState([]);
    const [resInfo,setResInfo] = useState([]);
    const {resid} = useParams();

    useEffect(()=>{
        getMenuData();
    },[])
    
    const getMenuData = async ()=>{
        const res=await fetch(RESTMENUURL+resid);
        const jsonData = await res.json();
        const resInfoCard = jsonData?.data.cards.find((item)=> item?.card?.card?.info)
        setResInfo(resInfoCard?.card?.card?.info)
        const rescard= jsonData.data.cards.find((item)=>item?.groupedCard?.cardGroupMap?.REGULAR?.cards);
        const menuitems = rescard?.groupedCard?.cardGroupMap?.REGULAR?.cards.find((item)=> item?.card?.card?.itemCards);
        setRestMenuData(menuitems?.card?.card?.itemCards)
       // console.log(restMenuData);
    }

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
