import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [file, setFile] = useState(null);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [trys, setTrys] = useState(2);
  const [warning, setWarn] = useState(false);
  const [loadActive, setLoadActive] = useState(false);
  const audioElement = document.getElementById("myAudio");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("dat.json");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setFile(data);
        setMin(Math.floor(data.quiz.timelimit / 60));
        setSec(data.quiz.timelimit % 60);
      } catch (error) {
        console.error("Error fetching quiz data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (file) {
      setLoadActive(true);
      const interval = setInterval(() => {
        if (sec === 0) {
          if (min === 0) {
            setWarn(true);
            clearInterval(interval);
          } else {
            setMin(min - 1);
            setSec(59);
          }
        } else {
          setSec(sec - 1);
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [file, min, sec]);

  const handleTry = () => {
    if (trys < 1) {
      document.getElementById("butt").disabled = true;
    } else {
      setTrys(trys - 1);
      audioElement.play();
      document.getElementById("butt").disabled = true;
      setTimeout(() => {
        document.getElementById("butt").disabled = false;
      }, audioElement.duration * 1000);
    }
  };

  return (
    <>
      <div className='container'>
        <audio id="myAudio">
          <source src="horse.ogg" type="audio/ogg" />
          <source src="horse.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <p>Remaining tries: {trys}</p>
        <button id='butt' onClick={handleTry}>Play</button>
      </div>
      <div>
        <div className="count">
          <h3 className={`${warning ? "warn active" : "warn"}`}>{`${min < 10 ? `0${min}` : min}:${sec < 10 ? `0${sec}` : sec}`}</h3>
          <div className="loader">
            <div className={`${loadActive ? "bar" : "bar on"}`}></div>
          </div>
        </div>
      </div>
      <div className="quescontainer">
        {file && file.quiz.questions.map((question, index) => (
          <div className="sub_container" key={index}>
            <div className="question">{index + 1}. {question.question}</div>
            <div className='opt'>
              {question.options.map((option, idx) => (
                <div className="opt_sub" key={idx}>
                  <input type="radio" name={`answer${index}`} id={`answer${index}${idx}`} />
                  <label htmlFor={`answer${index}${idx}`}>{option}</label>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button className='but'>Submit</button>
    </>
  );
}

export default App;
