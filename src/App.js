import React from "react";
import ReactDOM from "react-dom/client";    
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Body from "./Components/Body";
const App=()=>{
    return(
        <div>
            <NavBar/>
            <Body/>
            <Footer/>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);