import { useState } from "react"

export default function Counts(){

    const[cnt,chncnt]=useState(0);
    return(
        <div>
        <h2>{cnt}</h2>
        <button onClick={()=>{chncnt(cnt+1)}}>Increment</button>
        <button onClick={()=>{chncnt(cnt-1)}}>Increment</button>
        </div>
    )
}
    