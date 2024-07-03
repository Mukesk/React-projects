import { useEffect, useState } from 'react'
import axios from 'axios';

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   const [amount ,setAmount]=useState(1);
   const [fromcurrency,setFromCurrency]=useState("USD");
   const [tocurrency,setToCurrency]=useState("INR");
   const [converted,setConverted]=useState(null);
   const[exchange,setExchange]=useState(null)
   useEffect(()=>{
    const fetechdata =async ()=>
   {
    try{
      let url=`https://v6.exchangerate-api.com/v6/3fa529c918ef12d40d5fe9a7/latest/${fromcurrency}`;
      const dat= await axios.get(url);
      //console.log(dat)
      
      const res=dat.data.conversion_rates[tocurrency];
      
      setExchange(res);  
    }catch(error){
      console.log(error)
    }
   }
   fetechdata();

   },[fromcurrency,tocurrency])
   useEffect(()=>{
    const cals= (exchange*amount).toFixed(2);
    setConverted(cals)
     
   },[exchange,amount])


  return (
    <>
    <div className='container'>
      <div>
        <img  src='logo.png'></img>
      </div>
      <label>Enter Amount</label>
      <input value={amount} onChange={(e)=>{setAmount(parseFloat(e.target.value))}} type='number'></input>
      <label>Select Currency </label>
      <select value={fromcurrency} onChange={(e)=>{setFromCurrency(e.target.value)}}>
        <option value="USD">US-USD</option>
        <option value="INR">Indian-INR</option>
        <option value="KWD">Kuwaiti Dinar-KWD</option>    
        <option value="BHD">Bahraini Dinar-BHD</option>    
        <option value="OMR">Oman Rial-OMR</option>    
        <option value="JOD" >Jordanian Dinar-JOD</option> 
        <option value="GBP" >British Pound -GBP</option>   
        <option value="GIP" >Gibraltar Pound -GIP</option>   
        <option value="CHF">Swiss Franc-CHF</option>

      </select>
     
      <label>TO </label>
      <select value={tocurrency} onChange={(e)=>{setToCurrency(e.target.value)}}>
        <option value="INR">Indian-INR</option>
        <option value="USD">US-USD</option>
        <option value="KWD">Kuwaiti Dinar-KWD</option>    
        <option value="BHD">Bahraini Dinar-BHD</option>    
        <option value="OMR">Oman Rial-OMR</option>    
        <option value="JOD" >Jordanian Dinar-JOD</option> 
        <option value="GBP" >British Pound -GBP</option>   
        <option value="GIP" >Gibraltar Pound -GIP</option>   
        <option value="CHF">Swiss Franc-CHF</option>
        
      </select>

    
    <div className='res'>
      {amount} {fromcurrency} is equal to {converted} {tocurrency}
    </div>
  </div>
      
    </>
  )
}

export default App
