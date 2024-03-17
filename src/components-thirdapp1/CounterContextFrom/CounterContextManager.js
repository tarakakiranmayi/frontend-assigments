
import A from '../CounterContextFrom/CounterContextFrom';
import B from '../CounterContextFrom/CounterContestTable';




function CounterContextManager()
{
   
    
    return(
        
        <div className="w-75 m-5 p-2 mx-auto">
            <div className="row g-3  mx-auto">
              <div className="col-sm-9 w-100 "><A/></div>
              <div className="col-sm-6 w-100"><B/></div>
             
            </div>

        </div>
    );
}
export default CounterContextManager;

