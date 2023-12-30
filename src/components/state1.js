import { useState } from "react"
export default function Statechange(){
    const[nm,nmchg]=useState("Spidy")
    const[msg,msgchg]=useState("Welcome")
    return(
        <div>
            <h3>{msg} {nm}</h3>
            <input type="text" name="nm" onChange={(e)=>{
                nmchg(e.target.value)
                 
            }}></input>
            <button name="b1" onClick={()=>{msgchg("Hello")}}>Submit</button>
        </div>
    )
}