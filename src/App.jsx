import { useState } from 'react'

import './App.css'

function App() {

  function handleClick(){
    alert('btn clicked')
  }

  const addFive = (num) => {
    alert(num + 5);
  }
  return (
    <>
      <h2>React Core Concepts- part 2</h2>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={() => alert('button2 clicked')}>Click Me2</button>
      {/* we cannot write <button onClick={addFive(3)}>Click Me3</button> */}
      <button onClick={() => addFive(3)}>Click Me3</button>

    </>
  )
}

export default App
