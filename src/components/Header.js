import { LOGO_URL } from "../utils/constants";
import {use, useState} from "react"
import { Link } from  "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus"
const Header = () =>{
    const[btnNameReact, setBtnNameReact]=useState("Login")
    //const onlineStatus=useOnlineStatus()
    const onlineStatus=useOnlineStatus()

    return(
        <div className="flex justify-between bg-pink-50 shadow-lg">
            <div className="logo-container">
                <img className="w-48"  src={ LOGO_URL } alt="logo" />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status : {onlineStatus ? "🟢":"🔴"}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About Us</Link></li>
                    <li className="px-4"><Link to="/contact">Contact us</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4"><Link to="/cart">Cart</Link></li>
                    <button  
                    className="px-4" 
                    onClick={
                        ()=>{btnNameReact=="Login" ? setBtnNameReact("LogOut") : setBtnNameReact("Login")
                            console.log(btnNameReact)
                        }
                        }>{btnNameReact}</button>
                        
                </ul>

            </div>
        </div>
        
    )
}
export default Header;