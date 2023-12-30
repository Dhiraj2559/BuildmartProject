import { useEffect, useState } from "react"
import { json } from "react-router-dom";

export default function Localstorage()
{    const[uid,cngid]=useState("");
   
        localStorage.setItem("uid",JSON.stringify(uid));
    return(
        <div>
                Enter uid:
                <input type="text" name="uid" value={uid} onChange={(e)=>{
                     cngid(e.target.value)
                }}/>
                <input type="button" value="submit"/>
        </div>
    )
}