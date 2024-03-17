
function Fetch2(props)
{
    return(
        <div className="col col-sm-4 col-lg-4">
            <div className=" card  h-100 shadow-lg border-2 border-rounded ">
                <div className="card-body  fs-2">
                    <h6 className="fs-8">Id: {props.data.id}</h6>
                    <h6 className="fs-8">Name: {props.data.name}</h6>
                    <h6 className="fs-8">Username: {props.data.username}</h6>
                    <h6 className="fs-8">ADDRESS:</h6>
                        <h6 className="fs-8">street: {props.data.address.street}</h6>
                        <h6 className="fs-8">Suite: {props.data.address.suite}</h6>
                        <h6 className="fs-8">City: {props.data.address.city}</h6>
                        <h6 className="fs-8">Zipcode: {props.data.address.zipcode}</h6>
                    
                  
                   
                    <h6 className="fs-8">{props.data.website}</h6>
                    <h6 className="fs-10">COMPANY: </h6>
                        <h6 className="fs-8">Name: {props.data.company.name}</h6>
                        <h6 className="fs-8"> catchPhrase: {props.data.company.catchPhrase}</h6>
                        <h6 className="fs-8">Bs: {props.data.company.bs}</h6>
                      
                       
                    

                    
                </div>
                <div className="card-footer border-3 bg-light d-block mx-auto">
                    <button className="btn btn-success border-2" onClick={props.fun}>ADD</button>
                </div>
            </div>

        </div>
    );
}
export default Fetch2;
