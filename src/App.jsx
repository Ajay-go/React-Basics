import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let add = () =>{
    if(count == 20){
      alert("cannot add , Value already 20");
      return
    }
    if(count < 20){
      setCount(count+1);
      
    }
  }
  let sub = () => {
    if(count == 0){
      alert("cannot subtract ,Valur already 0");
      return
    }
    if(count > 0){
      setCount(count-1)
    }
  }

  return (
    <>
      <h1>count :{count}</h1>
      <button onClick={add}>add</button>
      <button onClick={sub}>remove</button>
    </>
  )
}

export default App
