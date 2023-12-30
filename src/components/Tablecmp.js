function Tableof6(){
    var n=6;
    const arr=[];
    //const createTable = () => {
        
        for(let i=1;i<=10;i++)
        {
            arr.push(6*i);
        }
    //}
    return(
        <div>
            <table class="table" border={1}>
              {    
                  //createTable 
                  arr.map((v)=>{
                    return <tr> <td> {v} </td></tr>
                  })
              }        
            </table>
        </div>
    )
}

export default Tableof6;