import {useState} from "react"
const User=(props)=>{
    const [count, setCount]=useState(0)
    const [count2, setCount2]=useState(1)
    return(
        <div className="user-card">
            <h1>functional</h1>
            <h1>Count={count}</h1>
            <h1>Count2={count2}</h1>
            <h2>Name:{props.name}</h2>
            <h3>Location:{props.location}</h3>
            <h2>Contact no:</h2>
        </div>
    )
}

export default User