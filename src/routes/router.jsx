import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import Service from "../Pages/Service/Service";
import Home from "../pages/Home";

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