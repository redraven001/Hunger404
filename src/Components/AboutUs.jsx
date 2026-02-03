import react, { useContext } from "react";
import UserContext from "../Utils/UserContext";

const AboutUs= ()=>{
    const contextData=useContext(UserContext);
    return(
        <div className="us-pages">
            <h1 className="text-center">About Us...</h1>
            {contextData.showContext && <div>{contextData.userName}</div>}
        </div>
    )
}
export default AboutUs;