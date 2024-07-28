import { useState } from 'react'

import './App.css'

function App() {
  const [data,setData]=useState(new Date)
  useState(()=>{
    const timer=   setInterval(()=>{setData(new Date)},1000)
    return ()=>{clearInterval(timer) }
  },[])
  
   function format(dat){
      const res= dat>12?dat-12:dat;
      return res
       }
   function formatwithzero(datr){
     const rew= datr<10?`0${datr}`:datr;
     return rew

   }
   const formatday=(day)=>{
    const option={weekday:"long",month:"long",year:"numeric"};
     return day.toLocaleDateString(undefined,option)
   }


  return (

    <>
    <div className="d_clock">
      <div className="container">
        <h3>
          Digital clock
          <hr></hr>
        </h3>
        
        <h4>
          {formatwithzero(format(data.getHours()))}:{data.getMinutes()}:{formatwithzero(data.getSeconds())}{formatwithzero(data.getHours()>12?" PM":" AM")}

        </h4>
        <h5>
          
          {formatday(data)}

        </h5>
        
      </div>
    </div>
      
    </>
  )
}

export default App
