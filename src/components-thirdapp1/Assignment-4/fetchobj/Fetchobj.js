

function Fetchobj(props)
{
    return(
        <div className="col col-sm-4 col-lg-3">
            <div className=" card  h-100 shadow-lg border-2 border-rounded ">
                <div className="card-body text-center fs-7">
                    <h3>{props.data.id}</h3>
                    <h3>{props.data.name}</h3>
                    <h3>{props.data.username}</h3>
                    <h3>ADDRESS:
                        <h2>{props.data.address.street}</h2>
                        <h2>{props.data.address.suite}</h2>
                        <h2>{props.data.address.city}</h2>
                        <h2>{props.data.address.zipcode}</h2>
                    </h3>
                    <h3>GEO:
                        <h2>{props.data.geo.lat}</h2>
                        <h2>{props.data.geo.lng}</h2>
                    </h3>
                   
                    <h3>{props.data.website}</h3>
                    <h3>COMPANY:
                        <h2>{props.data.company.name}</h2>
                        <h2>{props.data.company.catchPhrase}</h2>
                        <h2>{props.data.company.bs}</h2>
                      
                       
                    </h3>

                    
                </div>
                <div className="card-footer border-3 bg-light">
                    <button className="btn btn-success border-2" onClick={props.fun}>ADD</button>
                </div>
            </div>

        </div>
    );
}
export default Fetchobj;
