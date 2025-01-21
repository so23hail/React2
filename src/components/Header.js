import { LOGO_URL } from "../utils/constants";
console.log(LOGO_URL)
const Header = () =>{
    
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo"  src={ LOGO_URL } alt="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>

            </div>
        </div>
        
    )
}
export default Header;