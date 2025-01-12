import React from "react"
import ReactDOM, { createRoot } from "react-dom/client"

const heading= (
    <h1 id="heading">
    This is  simple headind created in the functional component
    </h1>
    )


const Jsxheading = () => ( <h1 id="heading">
    This is created using JSX
    </h1>
    )


    const Header= () =>{
        return(
            <div className="Header">
                <div>
                    
                </div>
            </div>

        )
    }

    const AppLayout = () =>{
        return(
            <div className="App">
            
            </div>
        )
    }

const HeadingComponent=()=>(
    <div id="container">
        <Jsxheading />
        {heading}
        <h1 className="heading"> This is heading in functional component</h1> 

    </div>
)    

const root=createRoot(document.getElementById("root"))
root.render(<HeadingComponent />)


