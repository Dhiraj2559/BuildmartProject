

function ArrayComp(){
    var arr=["Dhiraj","Chutki","Raju","OM","Sumit","Aditya"]
return(
    <div>
    <ul>
    {arr.map(function(v){
       return <li key={v}>{v}</li>
    })}
    </ul>
    </div>
)
}
export default ArrayComp;