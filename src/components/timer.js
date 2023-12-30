import { useEffect, useState } from "react"

export default function Timer1()
{
    const[ct,setct]=useState(new Date());
    useEffect(()=>{
        setInterval(()=>{
            setct(new Date())
        },1000)
    })
    useEffect(()=>{console.log("updated")})
    return(
        <div >
        
            <h2>{ct.getHours()+":"+ct.getMinutes()+":"+ct.getSeconds()}</h2>

        </div>
    )
}