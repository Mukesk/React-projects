import { useState } from 'react'

import './App.css'
import Faq from './faq'


function App() {
  const data=[
    {id:1,question:"what is react",answer:"react is library for javasrcipt"},
    {id:2,question:"what is compontents",answer:"components are used in react seperate jsx file to access "},
    {id:3,question:"what is hooks ",answer:"hooks are inbulit function in react "},
    {id:4,question:"Detail about react ",answer:"LOREM"}
  ]
  

  return (
    <>
    <h1 className="title">FAQ</h1>
     
     <div>{data.map((item)=>(<Faq key={item.id} no={item.id} question={item.question} answer={item.answer}/>))}</div>
    
    </>
  )
}

export default App
