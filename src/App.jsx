import { useState } from 'react'

import './App.css'
import Counter from './counter';
import Team from './Team'
import Users from './Users';
import Friends from './Friends';
import Posts from './Posts';

function App() {

  function handleClick(){
    alert('btn clicked')
  }

  const addFive = (num) => {
    alert(num + 5);
  }

  return (
    <>
      <div>
        <h2>React Recap</h2>
        <ul>
          <li>Components</li>
          <li>JSX</li>
          <li>Props</li>
          <li>Event Handlers</li>
          <li>State</li>
          <li>Data Load/ SideEffect</li>
        </ul>
        <hr />
        <Posts></Posts>
      </div>

      <h2>React Core Concepts- part 2</h2>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={() => alert('button2 clicked')}>Click Me2</button>
      {/* we cannot write <button onClick={addFive(3)}>Click Me3</button> */}
      <button onClick={() => addFive(3)}>Click Me3</button>

    </>
  )
}

export default App
