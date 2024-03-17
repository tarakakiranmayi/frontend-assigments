import { CounterContext } from '../../Context/CounterContext';
import { useContext } from 'react';

function B() {
    let [counter,setCounter]=useContext(CounterContext)
  return (
    <div className="bg-primary">
         <h2  className=' fs-4'>This is B</h2>
         <h5>Counter:{counter}</h5>
        <button className='btn btn-light mx-auto' onClick={()=>setCounter(counter+1)}>click</button>
    </div>
  )
}

export default B