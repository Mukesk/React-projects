import "./faq.css"
import {useState} from "react"
function Faq(props) {
    const {question ,no,answer}=props
    const [active,setActive]=useState(false)


    return (
      <>
      <div className={ ` container ${active?" active ":"  "} `}  onMouseEnter={()=>setActive(!active)}  onMouseLeave={()=>setActive(!active)  }  >
        
        <h4 className="question"  >{no}.{question}</h4>
        <p className="answer">{answer}</p>
  
      </div>
      </>
    )
  }
  
  export default Faq
  