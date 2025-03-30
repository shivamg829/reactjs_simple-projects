import { useState } from "react"
import "../style.css"
const Counter = () => {
    const [count, setCount] = useState(0);
  return (
    <div>
    <div className="container">
        <h className="number">{count}</h>
    </div>
    <div className="btns-container">
        <button className="btns" onClick={() => setCount(count + 1)}>+</button>
        <button className="btns" onClick={() => setCount(count - 1)}>-</button>
    </div>
    </div>
  )
}

export default Counter