import React from "react";
import ReactDOM from "react-dom/client";  
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";  

import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Body from "./Components/Body";

import 'bootstrap/dist/css/bootstrap.min.css';
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import ErrorElement from "./Components/ErrorElement";

const App=()=>{
    return(
        <div>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

const appRouter=createBrowserRouter([
        {   path:"/", 
            element:<App/>,
            children:[  {path:"/", element:<Body/>,errorElement:<ErrorElement/>},
                        {path:"/about", element:<AboutUs/>,errorElement:<ErrorElement/>},
                        {path:"/contact", element:<ContactUs/>,errorElement:<ErrorElement/>}
                    ],
            errorElement:<ErrorElement/>

        }
    ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);