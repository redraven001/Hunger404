import React from 'react'
import { IMG_URL } from '../assets/constants.js';
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
    console.log(restMenuData);
    if(resInfo.length===0)return <ShimmerUIRestList/>

  return (
    <div  className='d-flex justify-content-center flex-column align-items-center'>
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
        <div className='accordion' id='MenuAccordion' style={{width:"70%"}}>
        {restMenuData.map((item,index)=>
                <div className='accordion-item' key={item?.card?.card?.title}>
                    <h3 className="accordion-header" >
                        <button className={`accordion-button ${index===0? '' : 'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded={index===0? true : false} aria-controls={`collapse${index}`}>
                            {item?.card?.card?.title}
                        </button>
                    </h3> 
                    <div id={`collapse${index}`} className={`accordion-collapse collapse ${index==0? 'show':""}`} aria-labelledby={index} data-bs-parent="#MenuAccordion">
                        <div className="accordion-body">
                            {item?.card?.card?.itemCards?.map((foodItem)=>
                                <RestMenuItem item={foodItem} key={foodItem?.card?.info?.id}/>
                            )}
                        </div>
                    </div>  
                </div>
        )}
        </div>
    </div>
  )
}