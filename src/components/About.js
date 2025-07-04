import React from "react"
import User from "./User"
import UserClass from "./UserClass"
import UserContext from "../utils/UserContext"

class About extends React.Component{
    
    componentDidMount(){
        console.log("Parent did mount")
    }
    render(){
        console.log("parent render")
        return(
        <div>
            <h1>Hello</h1>
            <h5>This is about us page</h5>
            <div>
                logged in User
                <UserContext.Consumer>
                    {({loggedInUser})=><h1>{loggedInUser}</h1>}
                </UserContext.Consumer>
            </div>
            {/* <User name={"Sohail functional"} location={"Shivpuri"}/> */}
            <UserClass name="Sohail" location="Shivpuri"/>
        </div>
        )
    }
}
// const About=()=>{
//     return(
//         <div>
//             <h1>Hello</h1>
//             <h5>This is about us page</h5>
//             {/* <User name={"Sohail functional"} location={"Shivpuri"}/> */}
//             <UserClass name="Sohail" location="Shivpuri"/>
//         </div>
//     )
// }

export default About