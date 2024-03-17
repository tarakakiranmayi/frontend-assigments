function Userobj(props)
{
    return(
        <div className="col-sm-4 col-lg-4 col col-md-4">
            <div className="card p-3 m-3 h-100 text-center shadow-lg">
                <img src={props.data.avatar} className="border-rounded w-50 d-block mx-auto card-img" alt=""/>
                <div className="card-body p-3 ">
                    <h2 className="fs-6">{props.data.id}</h2>
                    <p className="fs-6">{props.data.email}</p>
                    <h2 className="fs-6">{props.data.first_name}</h2>
                    <h2 className="fs-6">{props.data.last_name}</h2>
                </div>



            </div>
       
        </div>
    );
}
export default Userobj;