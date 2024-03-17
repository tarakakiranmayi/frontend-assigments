

function Test2(props)
{
    return(
        <div className="bg-danger">
            <h5>Child here</h5>
            <button className="btn btn-secondary p-3 m-4" onClick={props.fun}>increment</button>
            <button className="btn btn-secondary p-3 m-4" onClick={props.func}>decrement</button>

        </div>
    );
}
export default Test2;