import { createBrowserRouter } from "react-router-dom";
import Register from "@/pages/Auth/Register";
import Login from "@/pages/Auth/Login";
import NotFound from "@/pages/NotFound";
import Layout from "@/components/Auth/Layout";

export const router = createBrowserRouter([
    {
        path:"/auth",
        element: <Layout/>,
        children:[
            {
                path: "register", 
                element: <Register/>
            },
            {
                path: "login", 
                element: <Login/>
            }
        ]
    },
    {
        path:"*",
        element: <NotFound/>
    }
])