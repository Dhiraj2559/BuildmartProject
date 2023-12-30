import { useReducer } from "react"
const init={
    mail:"",
    pwd:"",
    r1:"",
    c1:""
};
const reducer= (state,action)=>{
    switch(action.type)
    {
        case 'submit':
            return { ...state, [action.fld]: action.val };
        case 'reset':
            return init;
    }
};
export default function Form2(){
    const[nm,dispatch]=useReducer(reducer,init);

    const submitData = (e) => {
        //default behavior submit - cancelling
        e.preventDefault();
        if((nm.c1)=="pass")
        console.log(JSON.stringify(nm));
    }

    return(
        <div>
            <form>
                <table>
                    <tr>
                        <td>
                            Email Id:
                        </td>
                        <td>
                            <input type="email" name="mail" value={nm.mail} onChange={(e)=>{
                                dispatch({type:"submit",fld:"mail",val:e.target.value})
                            }}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Password:
                        </td>
                        <td>
                            <input type="password" name="pwd" value={nm.pwd} onChange={(e)=>{
                                dispatch({type: "submit" ,fld:"pwd",val:e.target.value})
                            }}/>
                        </td>
                    </tr>
                    <tr>
                        <td>    
                        <input type="radio" name="r1" id="m" value="Male" onChange={(e)=>{
                            dispatch({type:"submit",fld:"r1",val:e.target.value})
                        }}/>Male
                        </td>
                        <td>
                        <input type="radio" name="r1" id="f" value="Female" onChange={(e)=>{
                            dispatch({type:"submit",fld:"r1",val:e.target.value})
                        }}/>Female
                        </td>
                    </tr>
                    
                    <tr>
                        <td>    
                        <input type="checkbox" name="c1" value="pass" onClick={(e)=>{
                            dispatch({type:"submit",fld:"c1",val:e.target.value})
                        }}/>I Agree
                        </td>
                    </tr>
                    <tr>
                        <td>    
                        <button onClick={(e)=>{submitData(e)}} >Submit</button>
                        </td>
                        <td>
                        <button >Reset</button>
                        </td>
                    </tr>
                </table>
                      {/*  <div>
                            
                        <p>{nm.mail}</p><br/>
                        <p>{nm.pwd}</p><br/>
                        <p>{nm.r1}</p><br/>
                        <p></p><br/>
                    </div>*/}
            </form>
        </div>
    )
}