import React, { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const handleClick = (e) => {
    const text = e.target.innerText
    if(text === "First") {
      setCount(0)
    } else if(text === "Prev") {
      setCount(prev => prev-1)
    } else if(text === "Next") {
      setCount(prev => prev+1)
    } else if(text === "Last") {
      setCount(4)
    }
  }

  return (
    <div>
      <p>{count}</p>
      <button disabled={count === 0} onClick={handleClick}>First</button>
      <button disabled={count === 0} onClick={handleClick}>Prev</button>
      <button disabled={count === 4} onClick={handleClick}>Next</button>
      <button disabled={count === 4} onClick={handleClick}>Last</button>
    </div>
  )
}

export default App