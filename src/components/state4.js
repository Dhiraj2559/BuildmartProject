import { useEffect, useState } from "react"
export default function ImgState()
{ const[flag,changeFlag] = useState(true);
    const[str,setstr]=useState("");
    useEffect(()=>{
       let m1=localStorage.getItem("uid");
       let obj=JSON.parse(m1);
       setstr(obj);
    },[])
    return(
        <div>
            <h1>{str}</h1>
            <img src="https://cdn.pixabay.com/photo/2023/08/28/20/36/gerbera-8220025_640.jpg" 
            alt="img" style={{display:flag?"block":"none"}}></img>
            <input type="checkbox" checked={flag} onClick={()=>{changeFlag(!flag)}}/>Toggel Image
        </div>
    )
}

