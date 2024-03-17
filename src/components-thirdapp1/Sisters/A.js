import B from '../Sisters/B';
import C from '../Sisters/C';
import { CounterContext } from '../../Context/CounterContext';
import { useContext } from 'react';

function A() {
    let [counter,setCounter]=useContext(CounterContext)
  return (
    <div className='bg-success'>
        <h2  className=' fs-4'>This is A</h2>
        <h5>Counter:{counter}</h5>
        <button className='btn btn-light mx-auto' onClick={()=>setCounter(counter+1)}>click</button>
        <B/>
        <C/>
    </div>
  )
}

export default A