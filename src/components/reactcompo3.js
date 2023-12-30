import { useEffect, useReducer, useState } from "react";
import { json } from "react-router-dom";


export default function PostEmp(){
    const[msg,setmsg]=useState("");

    const init={
        empno:0,
        ename:"",
        sal:0,
        deptno:0
    };
    const  reducer= (state,action)=>{
        switch(action.type)
        {
            case "update":
                return { ...state, [action.fid]: action.val };
            case "reset":
                return init;
        }
    }
    const [emp, dispatch] = useReducer(reducer, init);

    const submitData = (e)=>{
        e.preventDefault();
        const reqOpt={
            method:"POST",
            headers:{'content-type':'application/json'},
            body:JSON.stringify({
                empno:emp.empno,
                ename:emp.ename,
                sal:emp.sal,
                deptno:emp.deptno
                
            })
        }
        fetch("http://localhost:9000/insertemp",reqOpt)
        .then(res=>res.text())
        .then(str=>setmsg(str));
    };
    return(
        
        <div>
            <form>
                EMPID:<input type="number" name="empno" value={emp.empno} onChange={
                    (e)=>{dispatch({type:"update",fid:"empno",val:e.target.value})
                    }}/>
                <br/>
                Name:<input type="text" name="ename" value={emp.ename} onChange={
                    (e)=>{dispatch({type:"update",fid:"ename",val:e.target.value})}
                }/>
                <br/>
                Salary:<input type="number" name="sal" value={emp.sal} onChange={
                    (e)=>{dispatch({type:"update",fid:"sal",val:e.target.value})}
                }/>
                <br/>
                DeptNo:<input type="number" name="deptno" value={emp.deptno} onChange={
                    (e)=>{dispatch({type:"update",fid:"deptno",val:e.target.value})}
                }/>
                <br/>
                <input type="button" value="submit" onClick={(e)=>submitData(e)}/>
                <input type="reset" className="btn btn-danger" value="Reset" />
            </form>
            <p> {JSON.stringify(emp)}</p>
            <h3>{msg}</h3>
        </div>
    )
}