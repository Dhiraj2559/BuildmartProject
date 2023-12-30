export default function EmpInfo(pp){
    return(
        <div>
            <table style={{borderCollapse:"collapse"}} border={1}>
                <tr>
                <th>Employee name</th>
                <th>Employee name</th>
                <th>Employee name</th>
                </tr>
           { pp.e1.map((v)=>{
              return[<tr><td><h3>{v.eid}</h3></td>
               <td><h3>{v.name}</h3></td> 
               <td><h3>{v.salary}</h3> </td></tr>]
            })}

            
            </table>
        </div>
    )
}