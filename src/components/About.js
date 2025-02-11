import User from "./User"
import UserClass from "./UserClass"
const About=()=>{
    return(
        <div>
            <h1>Hello</h1>
            <h5>This is about us page</h5>
            <User name={"Sohail functional"} location={"Shivpuri"}/>
            <UserClass name="Sohail" location="Shivpuri"/>
        </div>
    )
}

export default About