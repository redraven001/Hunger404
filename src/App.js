import React, { lazy, Suspense, useContext, useState } from "react";
import ReactDOM from "react-dom/client";  
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";  

import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Body from "./Components/Body";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import ErrorElement from "./Components/ErrorElement";
import RestMenu from "./Components/RestMenu";
import ScrollTop from "./Components/ScrollTop.jsx";
import UserContext from "./Utils/UserContext.jsx";

const Groceries = lazy(() => import('../src/Components/Groceries.jsx'))

const App=()=>{
    const contextData = useContext(UserContext);
    const [userName,setUserName]=useState("Devendar");
    const showContext=false;

    return(
        <div className="app-layout d-flex flex-column">
            <ScrollTop/>
            <NavBar/>
            <div className="text-center">{contextData.userName}</div>
            <UserContext.Provider value={{userName,setUserName,showContext}}>
            <div className="page-content"> <Outlet/></div>
            </UserContext.Provider>
            <Footer/>
        </div>
    )
}

const appRouter=createBrowserRouter([
        {   path:"/", 
            element:<App/>,
            children:[  {path:"/", element:<Body/>,errorElement:<ErrorElement/>},
                        {path:"/about", element:<AboutUs/>,errorElement:<ErrorElement/>},
                        {path:"/contact", element:<ContactUs/>,errorElement:<ErrorElement/>},
                        {path:"/restaurant/:resid",element:<RestMenu/>,errorElement:<ErrorElement/>}
                    ],
            errorElement:<ErrorElement/>

        },{
            path:"/groceries",
            element:
            <Suspense fallback={<h1>Loading...</h1>}>
                <Groceries/>
            </Suspense>,
            errorElement:<ErrorElement/>
        }
    ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);