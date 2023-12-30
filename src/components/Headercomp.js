import img1 from '../logo.svg';
var dt=new Date();
function HeaderCom(){
    return(
        <div>
            <img src={img1} height={200} width={300}></img>
            <h2>WELCOME to React JS</h2>
            <p>Date: {dt.getHours()}:{dt.getMinutes()}:{dt.getSeconds()}</p>
        </div>
        
    )
}
export default HeaderCom;