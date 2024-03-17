import 'bootstrap/dist/css/bootstrap.css';
import '../userobj/Userobj.css';

function Userobj(props)
{
   
    return(
        <div className=" col-11 col-sm-6 ">
        
        <div className="card m-3 p-3 border-4  h-100 w-100 text-center border-rounded-1 shadow-lg">
            <img  className="mx-auto d-block  " src={props.data.image} width="60px" alt=""  ></img>
            <div className="card-body fs-19">
            <h4 className="fs-5">ID: {props.data.id}</h4>
            <h4 className="fs-5">TITLE: {props.data.title}</h4>
            <h5 className="fs-5 m-1">${props.data.price}</h5>
            <p>{props.data.description}</p>
            </div>
            <div className="card-footer">
            <h5 className="fs-5 m-3 yes">RATE: {props.data.rating.rate}</h5>
            <h5 className="fs-5 yes1">Count: {props.data.rating.count}</h5>
            </div>
           
         
       
        </div>
        </div>
    );
}
export default Userobj;