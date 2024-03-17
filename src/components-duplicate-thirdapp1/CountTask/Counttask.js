

function Counttask(props)
{
    return(
        <div className="border p-3 m-3">
            <h1>Total Task</h1>
            {
                <p>{props.user.length}</p>
            }
          
          
        </div>
    );
}
export default Counttask;