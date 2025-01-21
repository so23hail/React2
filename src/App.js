import Header from "./components/Header"
import RestaurantCard from "./components/RestaurantCard"
import Body from "./components/Body"
import React from "react"
import ReactDOM, { createRoot } from "react-dom/client"

const AppLayout =() =>{
    return(
        <div className="app">
            <Header />
            <Body />
        </div>
    )
        
}
  

const root=createRoot(document.getElementById("root"))
root.render(<AppLayout />)


