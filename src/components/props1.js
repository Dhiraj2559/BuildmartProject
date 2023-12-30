export default function Factnum(prop){
    var sum=1;
    for( var i=1;i<=prop.num;i++)
    {
      sum=sum*i;
    }
    return (
        <div>
            <h3 style={{backgroundColor:"black",color:"yellow"}}>Factorial of : {prop.num} is {sum}</h3>
        </div>
    )
}