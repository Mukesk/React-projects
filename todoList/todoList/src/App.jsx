import React, { useReducer } from 'react'

const App = () => {
  const intialValue=[
    {id:1,name:test},
    {id:2,name :reading}
  ]
  const [items,dipatcher]=useReducer(reeducer,intialValue)
  return (
    <>

     <h1>
      TODO List
    </h1> 
    <input/>
    <button type="button">add</button>
    <ol>
   
      items.map((item,index)=>{
         <li>
        exercise <button>delete</button>
     </li>
      }
      )
    </ol>
    </>
  )
}

export default App
