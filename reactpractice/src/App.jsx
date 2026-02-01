import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import PracticeForm from './practice/forms/PracticeForm';
function App() {
  const [count, setCount] = useState(0)

  function handleIncrement(){
    setCount(count=>{
      console.log("before 1st + update ",count);
      return count+1
    });

   /* setCount(
      console.log("before 2nd + update ",count),
      count+1
    );
    this wil give us undefine, because this statement in problematic.
    This is NOT valid setCount usage 
    setCount accepts exactly ONE argument:
    either a value → setCount(5)
    or a function → setCount(prev => prev + 1)

    But we pass two arguments here, so what does javaScript doing here is picking console.log(...) first, ignoring count+1;
    so we received setCount(undefined), that's why state come undefine.

    So once state become undefined
    state=>state+1 become undefined+1 => Nan
    */
  }

  function handleDecrement(){
    setCount(count=>{
      console.log("before 1st - update ",count);
      return count-1
    });
    setCount(count=>{
      console.log("before 2nd - update ",count);
      return count-1
    });
  }

  return (
    
      <Routes>
        <Route path='/form' element={<PracticeForm />} />

      </Routes>
  )
}

export default App
