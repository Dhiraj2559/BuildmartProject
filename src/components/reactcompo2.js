import { useEffect, useState } from "react";


export default function Empserver(){
    const[emp,setemp]=useState([]);

    useEffect(()=>{
        fetch("http://localhost:9000/emps")
        .then((data) => {return data.json()})
        .then(ds=> setemp(ds))
    })

    return(
        <div>
            <table className="table table-bordered table-success">
                <div>
                <tr>
                    <th>
                        <h3>EMP ID</h3>
                    </th>
                    <th>
                        <h3>EMP Name</h3>
                    </th>
                    <th>
                        <h3>EMP Salary</h3>
                    </th>
                    <th>
                        <h3>EMP DeptNo</h3>
                    </th>
                </tr>
               { emp.map((v)=>{return(
                <tr>
                    <td> {v.EMPNO}</td>
                    <td> {v.ENAME}</td>
                    <td> {v.SAL}</td>
                    <td> {v.DEPTNO}</td>
                </tr>
               )})}
               </div>
            </table>
        </div>
    )
}