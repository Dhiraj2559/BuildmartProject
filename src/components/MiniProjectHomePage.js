import { useReducer } from "react";
const init = {
  empid: "",
  ename: "",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "update":
      return { ...state, [action.fid]: action.val };
    case "reset":
      return init;
  }
};

export default function Form() {
  const [emp, dispatch] = useReducer(reducer, init);

  const submitdata=(e)=>{
    e.preventDefault();
    console.log("welcome "+emp.uid);
  }
  return (
    <div>
      <form>
        <div className="mb-2 mt-2 ">
          Enter UserId: 
          <input type="text" name="uid" value={emp.uid} onChange={(e) => {
              dispatch({ type: "update", fid: "uid", val: e.target.value });
            }}
          />
        </div>
        <div className="mb-2 mt-2">
          Enter Password:
          <input type="text" name="pwd" value={emp.ename}
          onChange={(e)=>{
            dispatch({type:"update",fid:"ename",val:e.target.value})
          }}/>
        </div>
        <div className="mt-2 ml-2">
          <button onClick={(e)=>{submitdata(e)}}>Submit</button>
          <input type="reset" className="btn btn-danger" value="Reset" />
        </div>
      <p>welcome {JSON.stringify(emp.uid)}</p>
      </form>
      {/* {JSON.stringify(emp)} */}
    </div>
  );
}