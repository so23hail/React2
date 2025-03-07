import Header from "./components/Header"
import RestaurantCard from "./components/RestaurantCard"
import Body from "./components/Body"
import React from "react"
import ReactDOM, { createRoot } from "react-dom/client"
import { createBrowserRouter, Outlet, RouterProvider, Outlet } from "react-router-dom"
import About from "./components/About"
import Contact from "./components/Contact"
import Error from "./components/Error"
import RestaurantMenu from "./components/RestaurantMenu"




const AppLayout =() =>{
    return(
        <div className="app">
            <Header />
            <Outlet />
        </div>
    )
        
}

const appRouter= createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        children:[
            {
                path:"/",
                element:<Body/> 
            },
            {
                path:"/about",
                element:<About />
            },
            {
                path:"/contact",
                element:<Contact />
            },
            {
                path:"/city/:resId",
                element:<RestaurantMenu />
            }
            
        ],
        errorElement:<Error />
    },
    
])
  

const root=createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter} />)


