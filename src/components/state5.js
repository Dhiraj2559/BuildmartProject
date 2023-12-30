import { useState } from "react";

export default function Displayar(pr){
    const[el,setel]=useState("")
    const[ar,arch]=useState(pr.nm);
    return(
        <div>
            <ul>
                {ar.map((v)=>{
                   return <li key={v}>{v}</li>
                })}
            </ul>
          <input type="text" name="n1" onChange={(e)=>{setel(e.target.value)}}/>
          <button onClick={()=>{arch(ar.concat(el))}}>Add</button>
        </div>
    )
}