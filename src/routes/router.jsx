import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import Home from "../Pages/Home/Home";
import Service from "../Pages/Service/Service";

export const myRouter   = createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/service",
                element:<Service/>
            }
        ]
    }
])