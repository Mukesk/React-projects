import React, { useState } from 'react';
import './cal.css';

const Calculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState('');

  const calculateBMI = () => {
    const isValidHeight = /^\d+?$/.test(height);
    const isValidWeight = /^\d+?$/.test(weight);

    if (isValidHeight && isValidWeight) {
      const heightInMeters =parseFloat(height);
      const weightInKg = parseFloat(weight);

      if (heightInMeters > 0 && weightInKg > 0) {
        const bmiValue = weightInKg / (((heightInMeters/100) * (heightInMeters/100)));
        setBmi(bmiValue.toFixed(2)); 
        if (bmiValue < 18.5) {
          setStatus('Underweight');
        } else if (bmiValue < 24.9) {
          setStatus('Normal');
        } else if (bmiValue < 29.9) {
          setStatus('Overweight');
        } else {
          setStatus('Obesity');
        }
      } else {
        // Handle invalid inputs (height or weight <= 0)
        setBmi(null);
        setStatus('');
        alert('Please enter valid height and weight values.');
      }
    } else {
      // Handle invalid inputs (non-numeric or negative values)
      setBmi(null);
      setStatus('');
      alert('Please enter numeric values for height and weight.');
    }
  };

  const resetInputs = () => {
    setHeight('');
    setWeight('');
    setBmi(null);
    setStatus('');
  };

  return (
    <div className="body">
      <div className="container">
        <div className="imgcon">
          <img src="/images/mainbg.jpg" alt="background" />
        </div>
        <div className="sub_container">
          <h2>BMI Calculator</h2>
          <label>Enter height (in Centimetres)</label>
          <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
          <label>Enter weight (in kg)</label>
          <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
          <div className="but">
            <button onClick={calculateBMI}>Calculate</button>
            <button onClick={resetInputs}>Reset</button>
          </div>
          <hr />
          {bmi !== null && (
            <div className="res">
              <div>Your BMI: {bmi}</div>
              <div>Condition: {status}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
