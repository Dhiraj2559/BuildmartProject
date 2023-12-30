import { useState } from "react"

export default function Paracng(){
    const[col,chngcl]=useState("black");
    return(
        <div>
            <p style={{color:col}} onClick={()=>{chngcl("red")}}>Hello Welcome to React JS </p>
            <input type="color" name="cl" onChange={(e)=>{chngcl(e.target.value)}}/>
            
        </div>
    )
}