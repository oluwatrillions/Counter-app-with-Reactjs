import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css'

function App () {

  const [count, setCount] = useState(0)

  function Increment (){
    setCount(prev=> prev + 1)
  }

  function Decrement (){
    setCount(prev=> prev - 1)
  }

  return <main>
            <button className='addBtn' onClick={Decrement}>Decrease</button>
            <span> {count} </span>
            <button className='subBtn' onClick={Increment}>Increase</button>
         </main> 
}

ReactDOM.render(<App />,document.getElementById('root'));