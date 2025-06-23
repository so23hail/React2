import Header from "./components/Header"
import Cart from "./components/Cart"
import RestaurantCard from "./components/RestaurantCard"
import Body from "./components/Body"
import React, {lazy, Suspense, useEffect, useState} from "react"
import ReactDOM, { createRoot } from "react-dom/client"
import { createBrowserRouter, Outlet, RouterProvider, Outlet } from "react-router-dom"
import About from "./components/About"
import Contact from "./components/Contact"
import Error from "./components/Error"
import RestaurantMenu from "./components/RestaurantMenu"
import UserContext from "./utils/UserContext"
import { Provider } from "react-redux"
import appStore from "./utils/appStore"
import Demo from "./components/Demo"



const Grocery= lazy(()=>import("./components/Grocery"))

const AppLayout =() =>{

    const [userName, setUserName]=useState()

    useEffect(()=>{
        const data={
            name:"Sohail Khan"
        }
        setUserName(data.name)
    },[])

    return(
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
        <div className="app">
            <Header />
            <Outlet />
        </div>
        </UserContext.Provider>
        </Provider>
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
            },
            {
                path:"/demo",
                element:<Demo />
            }
            
        ],
        errorElement:<Error />
    },
    
])
  

const root=createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter} />)


