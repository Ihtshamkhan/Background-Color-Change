import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [color, setcolor] = useState("#d7e0e9")

  return (
    <>
    <div id="main" style={{ background: color }}>
    <h1>Select Color</h1>
      <div id="content">
        <button
          style={{ background: "#e90c0c" }}
          onClick={() => {
            setcolor("#e90c0c");
          }}
        >
          Red
        </button>
        <button
          style={{ background: "#e9de0c" }}
          onClick={() => {
            setcolor("#e9de0c");
          }}
        >
          Yellow
        </button>
        <button
          style={{ background: "#23ee23" }}
          onClick={() => {
            setcolor("#23ee23");
          }}
        >
          Green
        </button>
        <button
          style={{ background: "#582a07" }}
          onClick={() => {
            setcolor("#582a07");
          }}
        >
          Brown
        </button>
        <button
          style={{ background: "#b20edb" }}
          onClick={() => {
            setcolor("#b20edb");
          }}
        >
          Purpel
        </button>
        <button
          style={{ background: "#0004ff" }}
          onClick={() => {
            setcolor("#0004ff");
          }}
        >
          Blue
        </button>
        <button
          style={{ background: "#ff009d" }}
          onClick={() => {
            setcolor("#ff009d");
          }}
        >
          Pink
        </button>
        <button style={{background: "#808080"}}
        onClick={()=>{
          setcolor("#808080")
        }}
        >Grey</button>
      </div>
    </div>
    </>
  )
}

export default App
