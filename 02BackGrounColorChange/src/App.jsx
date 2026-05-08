import { useState } from "react"

function App() {
  const [color, setColor] = useState("white")
  return(
    <>
    <div style={{backgroundColor: color, height: "100vh"}} className=" d-flex justify-content-center align-items-end gap-1">
      <div className="gap-1 d-flex mb-3">
        <button onClick={() => setColor("red")} className=" bg-danger rounded-3 border-danger">Red</button>
      <button onClick={() => setColor("blue")}className=" bg-primary rounded-3 border-primary">Blue</button>
      <button onClick={() => setColor("green")} className=" bg-success rounded-3 border-success">Green</button>
      <button onClick={() => setColor("yellow")} className=" bg-warning rounded-3 border-warning">Yellow</button>
    </div>
      </div>
    </>
  )
  
}

export default App
