import React from "react"
class UserClass extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }

    }
render(){
    return(
        <div className="user-card">
            <h1>Class Based</h1>
            <h1>Count:{this.state.count}</h1>
            <button onClick={()=>{
                this.setState({
                    count:this.state.count+1
                })
            }}>coiunt increase</button>
            <h2>Name:{this.props.name}</h2>
            <h3>Location:{this.props.location}</h3>
            <h2>Contact no:</h2>
        </div>
    )
}
}
export default UserClass;