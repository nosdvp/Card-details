import { useState } from 'react';
import './App.css';

function App() {

  const [step, setStep] = useState('enterData')

  const [userName, setUserName] = useState('')
  const [nameError, setNameError] = useState('')
  const [styleNameInput, setStyleNameInput] = useState('rightSide__boxContent_nameFiled_inputDefault')

  const [cardNumber, setCardNumber] = useState()
  const [cardNumberError, setCardNumberError] = useState('')
  const [styleCardNumberInput, setStyleCardNumberInput] = useState('rightSide__boxContent_cardNumberFiled_inputDefault')

  const [expMonth, setExpMonth] = useState()
  const [expYear, setExpYear] = useState()
  const [CVC, setCVC] = useState()

  
  

  const confirmForm = () => {
    if(userName === '' || cardNumber === ''){
      setNameError('Please enter your name')
      setStyleNameInput('rightSide__boxContent_nameFiled_inputError')

      setCardNumberError('Please enter your card number')
      setStyleCardNumberInput('rightSide__boxContent_cardNumberFiled_inputError')
    }
  }

  return (
    <div className='wrapper'>
      <div className='leftSide'></div>
      <div className='rightSide'>
        {step === 'enterData' ? (
          <div className='rightSide__boxContent'>

            <div className='rightSide__boxContent_nameFiled'>
              <p className='rightSide__boxContent_nameFiled_title'>CARDHOLDER NAME</p>
              <input
                className={styleNameInput}
                placeholder='e. g. James Hetfield'
                type='text'
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              ></input>
              <div className='rightSide__boxContent_nameFiled_error'>{nameError}</div>
            </div>

            <div className='rightSide__boxContent_cardNumberFiled'>
              <p className='rightSide__boxContent_cardNumberFiled_title'>CARD NUMBER</p>
              <input
                className={styleCardNumberInput}
                placeholder='e. g. 1234 5678 1234 5678'
                type='text'
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
              ></input>
              <div className='rightSide__boxContent_cardNumberFiled_error'>{cardNumberError}</div>
            </div>

            <div className='rightSide__boxContent_expCVCFiled'>
              
            </div>

            <button onClick={() => confirmForm()}>Confirm</button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default App;
