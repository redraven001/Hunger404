import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { FaSearch } from "react-icons/fa";

import RestaurantCard, { resPormoted } from './RestaurantCard'
import ShimmerUIRestList from './ShimmerUIRestList';

import '../Styles/serachBar.css'
import { RESTLIST } from '../assets/constants.js';
import useOnline from '../Utils/customHooks/useOnline';
import Offline from './Offline';
import { getPromoted } from '../Utils/functions.js';

const PromotedRes = resPormoted();

export default function Body() {
    const [allResData,setAllResData]=useState([]);
    const [resData,setResData]=useState([]);
    const [loading,setLoading]=useState(true);
    const [searchText,setSearchText]=useState("");
    const isOnline = useOnline();
    
    useEffect(()=>{
      getData();
    },[])

    const getData=async()=>{
      try{
        //use cors proxy if deployed on netlify or vercel
        const res=await fetch(RESTLIST);
        const jsonData=await res.json();
        const cards=jsonData?.data?.cards;
        const restCard = cards.find((item)=>
          item?.card?.card?.gridElements?.infoWithStyle?.restaurants
          )
        setAllResData(restCard?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setResData(restCard?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      }
      catch(error){
        console.log("error getting data",error);
      }
      finally{
        setLoading(false);
      }
    }
    const filterRes=()=>{
        const filteredResList = allResData.filter((res)=>{ return res.info.name.toLowerCase().includes(searchText.toLocaleLowerCase())})
        setResData(filteredResList);
    };

  return (
    isOnline ?
    <div>
       <div className='my-2'>
                <div className='w-100 d-flex justify-content-center my-1'>
                      <div id='search-container'>
                        <input id='inputArea' className='me-1 p-2' type="text" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}} placeholder="Search for your favorite restaurants dishes and more..." />
                        <button id='search-btn' onClick={filterRes}><FaSearch/></button>
                      </div>
                    </div>
               <h3 className=' my-2 text-center'> Popular Restaurant Near You....</h3>
               {loading ? <ShimmerUIRestList/>:
                    <div className='d-flex flex-wrap justify-content-center gap-1'>
                    {resData?.map((res,index)=>
                      <Link key={res?.info?.id} to={`/restaurant/${res?.info?.id}`}>{getPromoted(res) ?<PromotedRes resData={res}/>:<RestaurantCard resData={res}/>}</Link>)}
               </div>}
           </div>
    </div> : <Offline/>
  )
}
