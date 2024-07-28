import { useEffect, useState } from 'react'

import './App.css'


function App() {
  const [file,setFile]=useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("dat.json");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setFile(data.quiz); // Update state with the quiz object
        setMin(Math.floor(data.quiz.timeLimit / 60)); // Set initial minutes
        setSec(data.quiz.timeLimit % 60); // Set initial seconds
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);
  const [trys,setTrys]=useState(2);
  const audioElement=document.getElementById("myAudio");
  const [warning,setWarn]=useState(false)
  

  const handletry=()=>{   
    if (trys<1 ){
    document.getElementById("butt").disabled=true;
    }
    else{ 
      setTrys(trys-1) 
      audioElement.play();
     document.getElementById("butt").disabled=true;
     setTimeout(() => {
      document.getElementById("butt").disabled=false;
      
     }, audioElement.duration*1000 );  
    }
   }
   const [min,setMin]=useState(file.quiz.timeLimit/60);
   const [sec,setSec]= useState(0);
   const [loadActive,setLoadActive]=useState(false)
   useEffect(()=>{
    setLoadActive(true)
   },[])
  useEffect( ()=>{
   const interval = setInterval(()=>{
      if (sec==0){
        setMin(min-1)
        setSec(59)
      }
      else if(min<0){
        setMin(15)
        setWarn(true)


      }
      else{
        setSec(sec-1)
      }
    
    },1000)
    
    return ()=>clearInterval(interval)
  
}


  ,[sec,min])

  return (
    <>
    <div   className='container'>
    <audio id="myAudio"  >
  <source src="horse.ogg" type="audio/ogg"/>
  <source src="horse.mp3" type="audio/mpeg"/>
      Your browser does not support the audio element.
     </audio>
     <p>remaining trys:{trys}</p>  
     <button id='butt' onClick={handletry}>play</button>                                   
    </div> 
    <div>
      <div className="count">
        <h3 className={`${warning?"warn active":"warn"}`} >{`${min<10?`0${min}`:min}:${sec<10?`0${sec}`:sec}`}</h3>
        <div className="loader">
            <div className={`${loadActive?"bar":"bar on"}`}>
            </div>
        </div>
      </div>
    </div>
    <div className="quescontainer">
       <div className="sub_container">
        <div className="question">1.qus</div>
        <div className='opt'>
          <div className="opt_sub">
            <input type="radio" name="answer" id="" />
            <label>opt1</label>
          </div>
          <div className="opt_sub">
            <input type="radio" name="answer" id="" />
            <label>opt2</label>
          </div>
          <div className="opt_sub">
            <input type="radio" name="answer" id="" />
            <label>opt3</label>
          </div>
          <div className="opt_sub">
            <input type="radio" name="answer" id="" />
            <label>opt4</label>
          </div>
       </div>
       </div>
    </div>
      
    </>
  )
}

export default App
