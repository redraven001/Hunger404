import { useEffect, useState } from "react";
import { RESTMENUURL } from "../../assets/Images/constants";

const useRestMenuData = (resId) => {
    const [restMenuData, setRestMenuData] = useState([]);
    const [resInfo,setResInfo] = useState([]);

    useEffect(()=>{
        getMenuData(); 
    },[]);
    
    const getMenuData = async ()=>{
        const res=await fetch(RESTMENUURL+resId);
        const jsonData = await res.json();
        const resInfoCard = jsonData?.data.cards.find((item)=> item?.card?.card?.info)
        setResInfo(resInfoCard?.card?.card?.info)
        const rescard= jsonData.data.cards.find((item)=>item?.groupedCard?.cardGroupMap?.REGULAR?.cards);
        const menuitems = rescard?.groupedCard?.cardGroupMap?.REGULAR?.cards.find((item)=> item?.card?.card?.itemCards);
        setRestMenuData(menuitems?.card?.card?.itemCards)
    }
    return {restMenuData, resInfo};


}
export default useRestMenuData;