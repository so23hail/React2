// Demo of useMemo and useRef
// Demo of useMemo and useRef
// Demo of useMemo and useRef
import {useState, useMemo, useRef} from "react"
import {findNthPrime} from "../utils/constants"
const Demo = () =>{
    const [text, setText]= useState(0)
    const [isDarkTheme, setIsDarkTheme] = useState(true)
    // --- use of use Memo
    const prime= useMemo(()=>findNthPrime(text), [text]) 

    //const prime= findNthPrime(text) --- before using useMemo
    console.log("rendering..")
    const [stVar, setStVar] =useState(0)
    const handleClick =()=>{
        setStVar(stVar+1)
    }

    let ref=useRef(0)
    let x=0


    return(
        <div className="flex">
            <div className={"m-4 p-2, w-96 h-96 border border-black" + (isDarkTheme && " bg-gray-900 text-white")} >
                <div>
                    <button className="m-2 p-2  border border-black rounded-lg bg-green-300" onClick={()=>setIsDarkTheme(!isDarkTheme)}>Toggle</button>
                </div>
                <div>
                <input className="border border-black m-2 p-2" type="number" value={text} onChange={(e)=>setText(e.target.value)}/>
                </div>
                <div className="m-2 font-bold">Nth Prime number={prime}</div>
            </div>
            <div className="m-4 p-2, w-96 h-96 border border-black">
                <div>
                <button className="m-2 p-1 border border-black rounded-lg bg-green-300 cursor-pointer" onClick={()=>{
                    x=x+1
                    console.log("x= ",x)
                }}>Increase Let</button>
                <span>Let= {x}</span>
                </div>
                <div>
                <button className="m-2 p-1 border border-black rounded-lg bg-green-300 cursor-pointer" onClick={handleClick}>Increase State</button>
                <span>State= {stVar}</span>
                </div>
                <div>
                <button className="m-2 p-1 border border-black rounded-lg bg-green-300 cursor-pointer" onClick={()=>{
                    ref.current=ref.current+1
                    console.log("ref= ",ref)
                }}>Increase Ref</button>
                <span>Ref= {ref.current}</span>
                </div>
                
                
            </div>
        </div>
    )
}

export default Demo
