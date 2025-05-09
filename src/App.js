import Header from "./components/Header"
import Cart from "./components/Cart"
import RestaurantCard from "./components/RestaurantCard"
import Body from "./components/Body"
import React, {lazy, Suspense} from "react"
import ReactDOM, { createRoot } from "react-dom/client"
import { createBrowserRouter, Outlet, RouterProvider, Outlet } from "react-router-dom"
import About from "./components/About"
import Contact from "./components/Contact"
import Error from "./components/Error"
import RestaurantMenu from "./components/RestaurantMenu"



const Grocery= lazy(()=>import("./components/Grocery"))

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
                path:"/grocery",
                element:<Suspense fallback={<h1>This is fallback for grocery</h1>}><Grocery /></Suspense>
            },
            {
                path:"/cart",
                element:<Cart />
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


