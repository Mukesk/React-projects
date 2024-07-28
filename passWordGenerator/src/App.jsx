import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [strength,setStrength]=useState(8)
  const [upper,setUpper]=useState(false)
  const [lower,setLower]=useState(false)
  const [symbol,setSymbol]=useState(false)
  const [num,setNum]=useState(false)
  const   [password,setPassword]=useState("")
function Gene()
{  
  let charset="";
  if (upper) charset+="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if(lower) charset+="abcdefghijklmnopqrstuvwxyz";
  if (symbol) charset+="!@#$%^&*_+=-";
  if (num) charset+="1234567890";
  let res="";
  for( let i=0;i<strength;i++){
      const index=(Math.floor(Math.random()*charset.length))
      res+=charset[index]
  }
  setPassword(res)
  }
  const copytoclip =()=>{
     navigator.clipboard.writeText(password);
     alert("password copied")
  }
  
  return (
    <>
    <div className='container'>
      <h4>PASSWORD GENERATOR</h4>
      <label>Enter Strength</label>
      <input type='number' value={strength} onChange={(e)=>{setStrength(e.target.value)}}/>
      <div>
        <label>Include UpperCase</label>
        <input type='checkbox' value={upper} onChange={(e)=>{setUpper(e.target.checked)}}/>
      </div>
      <div>
        <label>Include LowerCase</label>
        <input type='checkbox' value={lower} onChange={(e)=>{setLower(e.target.checked)}}/>
      </div>
      <div>
        <label>Include Number</label>
        <input type='checkbox' value={num} onChange={(e)=>{setNum(e.target.checked)}}/>
      </div>
      <div>
        <label>Include Symbol</label>
        <input type='checkbox'value={symbol} onChange={(e)=>{setSymbol(e.target.checked)}}/>
      </div>
      <button onClick={Gene}>Generate</button>
      <div>
        <input  readOnly value={password} />
        <button onClick={copytoclip}>copy</button>
      </div>
        
    </div>
    </>
  )
}

export default App
