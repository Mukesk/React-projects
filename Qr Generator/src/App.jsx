import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

 function App() {
  const [img ,setImg]=useState("")
  const [loading,setLoad]=useState(false);
  const [data,setData]=useState("www.google.com")
  const [size,setSize]=useState("150")
  async function generateimg(){
  setLoad(true)
  try {
    const url = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(data)}`
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to generate QR code');
    }
    const blob = await response.blob();
    setImg(URL.createObjectURL(blob));
  } catch (err) {
    console.log("Error in QR code generation:", err);
  } finally {
    setLoad(false);
  }
}

  
  function downloadimg(){
    fetch(img)
    .then((res)=>res.blob())
    .then((blob)=>{
    const link=document.createElement("a")
    link.href=URL.createObjectURL(blob);
    link.download="qrimage.png" 
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    }
    )
    .catch(error=>console.log(error))
    
  }

  return (
    <>
    <div className='container'>
      <h3 className='cname'  >
        Qr Generator 
      </h3>
        <div className='image'>
          {loading && <p> please wait.... </p>}
          {img && <img src={img} />}
        </div>
      
        <label className="labforinput" >
          Enter Data or link
        </label>
        <input className='inputdata' value={data} onChange={(e)=>setData(e.target.value)}/>
      
        <label className="labforinput" >
          Enter Size eg:150
        </label>
        <input className='inputdata1' value={size} onChange={(e)=>setSize(e.target.value)} />
      
      <div className='groupbut'>
        <button className='but' onClick={generateimg}>Generate</button>
        <button className='but2' onClick={downloadimg}>Download</button>
      </div>
      <h6 className='footer'>Design by <a href=''>Mukeshkanna</a></h6>


    </div>
     
    </>
  )
}

export default App
