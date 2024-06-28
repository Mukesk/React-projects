import { useState } from 'react';
import html2canvas from 'html2canvas';
import './App.css';

function App() {
  function formatCardNumber(value) {
    return value.replace(/\D/g, '').replace(/(\d{4})(?=\d)/g, '$1-');
  }

  function changehandler(e) {
    const name = e.target.name;
    let value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    
    if (name === 'cardnum') {
      value = formatCardNumber(value);
    }

    setCard(prevState => ({
      ...prevState,
      [name]: value,
    }));
  }

  const handleDownload = () => {
    const cardElement = document.querySelector('.card');
    html2canvas(cardElement).then(canvas => {
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/jpeg');
      link.download = 'card.jpg';
      link.click();
    });
  };

  const [cardholder, setCard] = useState({
    credit: false,
    bank: "Indian Bank",
    cardnum: "1234-6789-1223-9999",
    cardholdername: "----",
    valid: "2024-09",
    bg: "bg1.jpg",
    color: "black"
  });

  return (
    <>
      <div className="container">
        <div className="card" style={{ backgroundImage: `url(${cardholder.bg})`, color: cardholder.color }}>
          <div className="top">
            <h6>{cardholder.credit ? "Credit" : "Debit"}</h6>
            <h6>{cardholder.bank}</h6>
          </div>
          <div className="imgcontainer">
            <h6>{cardholder.cardnum}</h6>
            <div className="imgman">
              <img className="chip" src="atmbg/chip.png" alt="chip" />
              <p className="arrow">{">"}</p>
            </div>
          </div>
          <div className="cardname">
            <div className="valid">
              <h6>Valid Thru</h6>
              <h6>{cardholder.valid}</h6>
            </div>
            <div className="carder">
              <h6>{cardholder.cardholdername}</h6>
            </div>
          </div>
        </div>
      </div>

      <div className="input-container">
        <div>
          <label htmlFor="credit">Is Credit Card</label>
          <input className='checkbox-wrapper-46' type="checkbox" checked={cardholder.credit} name="credit" onChange={changehandler} id="credit" />
        </div>
        <div>
          <label>Enter Bank Name:</label>
          <input value={cardholder.bank} className='coolinput  ' name="bank" onChange={changehandler} />
        </div>
        <div>
          <label>Enter Card Number:</label>
          <input value={cardholder.cardnum} name="cardnum" onChange={changehandler} />
        </div>
        <div>
          <label>Enter Card Holder Name:</label>
          <input value={cardholder.cardholdername} name="cardholdername" onChange={changehandler} />
        </div>
        <div>
          <label>Valid Till</label>
          <input type="month" value={cardholder.valid} name="valid" onChange={changehandler} />
        </div>
        <div>
          <label>Set Background</label>
          <select name="bg" value={cardholder.bg} onChange={changehandler}>
            <option value="atmbg/bg1.jpg">Background 1</option>
            <option value="atmbg/bg2.jpg">Background 2</option>
            <option value="atmbg/bg3.jpg">Background 3</option>
            <option value="atmbg/bg4.jpg">Background 4</option>
            <option value="atmbg/bg5.jpg">Background 5</option>
          </select>
        </div>
        <div>
          <label htmlFor="color">Select Font Color</label>
          <select name="color" id="color" value={cardholder.color} onChange={changehandler}>
            <option value="white">White</option>
            <option value="black">Black</option>
            <option value="silver">Silver</option>
            <option value="gold">Gold</option>
          </select>
        </div>
        <button onClick={handleDownload}>Download</button>
      </div>
    </>
  );
}

export default App;
