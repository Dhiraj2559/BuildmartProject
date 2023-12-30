export default function DisArr(ps){
    
    return(
        <div>
            <ul>
                {ps.nmarr.map((v)=>{
                    return <li>{v}</li>
                })}
            </ul>
        </div>
    )
}