import { useEffect, useState } from "react"

export default function JsonPlaceholder(){
    const[j1,setj1]=useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(data=>setj1(data))
    },[]);

    return(
        <div>
            <table className="table table-bordered table-success">
                <tr>
                    <td>
                        <h3>name</h3>
                    </td>
                    <td>
                        <h3>username</h3>
                    </td>
                    <td>
                        <h3>email</h3>
                    </td>
                    <td>
                        <h3>zipcode</h3>
                    </td>
                </tr>
             {  j1.map((v)=>{
                    return(
                    <tr>
                    <td>
                        <h6>{v.id}</h6>
                    </td>
                    <td>
                            <h6>{v.username}</h6>
                    </td>
                    <td>
                        <h6>{v.email}</h6>
                    </td>
                    <td>
                        <h6>{v.address.zipcode}</h6>
                    </td>
                    </tr> )
               })
                }
            </table>
        </div>
        
    )
}

