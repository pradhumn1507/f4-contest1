import './App.css'
import React, { useState, useEffect } from 'react';

function App() {
  const [num1, setNum1] = useState("")
  const [num2, setNum2] = useState("")
  const [result, setResult] = useState('')

  function getResult(val) {
    if (num1 !== '' && num2 !== '' && !isNaN(num1) && !isNaN(num2)) {
      const sum = eval(num1 + val + num2)
      setResult(`Result : ${sum}`)
      showResult()
    }
    else {
      showError()
    }
  }

  function showResult() {
    document.getElementById('result').style.display = 'block'
    document.getElementById('success').style.display = 'block'
    document.getElementById('error').style.display = 'none'
  }

  function showError() {
    document.getElementById('result').style.display = 'none'
    document.getElementById('success').style.display = 'none'
    document.getElementById('error').style.display = 'block'
  }

  function validate(){
    if(num1 === '' && num2 !== ''){
      document.getElementById('error').textContent = 'Error : Num1 cannot be empty!'
    }
    if(num1 !== '' && num2 === ''){
      document.getElementById('error').textContent = 'Error : Num2 cannot be empty!'
    }
    if(num1 === '' && num2 === ''){
      document.getElementById('error').textContent = 'Error : Please enter the numbers!'
    }
    if((num1 !== '' && num2 !== '' && !isNaN(num1)) || (num1 !== '' && num2 !== '' && !isNaN(num2))){
      document.getElementById('error').textContent = 'Error : Please enter either integers, floating-point numbers, positive, or negative!'
    }
  }

  useEffect(() => {
    document.getElementById('result').textContent = result
  }, [result])

  return (
    <div className='main'>
      <h1>React Calculator</h1>
      <input type="text" id="num1" placeholder='Num 1' onChange={(e) => { setNum1(e.target.value) }} />
      <input type="text" id="num2" placeholder='Num 2' onChange={(e) => { setNum2(e.target.value) }} />
      <div>
        <button className="btn" id='+' onClick={() => {validate();getResult('+')}}> + </button>
        <button className="btn" id='-' onClick={() => {validate();getResult('-')}}> - </button>
        <button className="btn" id='*' onClick={() => {validate();getResult('*')}}> * </button>
        <button className="btn" id='/' onClick={() => {validate();getResult('/')}}> / </button>
      </div>
      <h3 id='result'>  </h3>
      <h3 id='error'>  </h3>
      <h3 id='success'> Success : Your result is shown above!  </h3>
    </div>
  );
}

export default App;