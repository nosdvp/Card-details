import { useState } from 'react';
import './App.css';
import completed from './img/icon-complete.svg'
import cardFront from './img/bg-card-front.png'
import cardBack from './img/bg-card-back.png'

function App() {

  const [step, setStep] = useState('enterData')

  const [userName, setUserName] = useState('')
  const [nameError, setNameError] = useState('')
  const [styleNameInput, setStyleNameInput] = useState('rightSide__boxContent_nameFiled_inputDefault')

  const [cardNumber, setCardNumber] = useState('')
  const [cardNumberError, setCardNumberError] = useState('')
  const [styleCardNumberInput, setStyleCardNumberInput] = useState('rightSide__boxContent_cardNumberFiled_inputDefault')

  const [expMonth, setExpMonth] = useState('')
  const [expMonthError, setExpMonthError] = useState('')
  const [expMonthStyle, setExpMonthStyle] = useState('rightSide__boxContent_expCVCFiled_expBlock_inputBox_monthDefault')

  const [expYear, setExpYear] = useState('')
  const [expYearError, setExpYearError] = useState('')
  const [expYearStyle, setExpYearStyle] = useState('rightSide__boxContent_expCVCFiled_expBlock_inputBox_yearDefault')

  const [monthYearError, setMonthYearError] = useState('')

  const [CVC, setCVC] = useState('')
  const [CVCError, setCVCError] = useState('')
  const [styleCVC, setStyleCVC] = useState('rightSide__boxContent_expCVCFiled_cvcField_inputDefault')

  const confirmForm = () => {
    if(expMonth === '' && expYear === ''){
      setMonthYearError(`Can't be blank`)
    }else if(expMonth !== '' && expYear === ''){
      setMonthYearError('Please enter year')
    }else if(expMonth === '' && expYear !== ''){
      setMonthYearError('Please enter month')
    }
    if(userName === '' || cardNumber === '' || expMonth === '' || expYear === ''){
      setNameError('Please enter your name')
      setStyleNameInput('rightSide__boxContent_nameFiled_inputError')

      setCardNumberError('Please enter your card number')
      setStyleCardNumberInput('rightSide__boxContent_cardNumberFiled_inputError')

      setCVCError('Please enter your CVC')
      setStyleCVC('rightSide__boxContent_expCVCFiled_cvcField_inputError')

      setExpMonthError('Please enter month')
      setExpMonthStyle('rightSide__boxContent_expCVCFiled_expBlock_inputBox_monthError')

      setExpYearError('Please enter year')
      setExpYearStyle('rightSide__boxContent_expCVCFiled_expBlock_inputBox_yearError')
    }

    if(userName !== '' && cardNumber !== '' && expMonth !== '' && expYear !== ''){
      setStep('completed')
    }
  }

  return (
    <div className='wrapper'>

      <div className='cardFront'>
        <p>{cardNumber.padEnd(16, 0).match(/.{1,4}/g).join(' ')}</p>
        <p>{userName + 'JANE APPLESEED'.slice(userName.length)}</p>
        <p>{expMonth.padEnd(2, 0)}</p>
        <p>{expYear.padEnd(2, 0)}</p>
      </div>

      <div className='cardBack'>
        <p>{CVC.padEnd(3, 0)}</p>
      </div>

      <div className='leftSide'>
      </div>
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
              <div className='rightSide__boxContent_expCVCFiled_expBlock'>
                <p className='rightSide__boxContent_expCVCFiled_expBlock_title'>EXP. DATA (MM/YY)</p>
                <div className='rightSide__boxContent_expCVCFiled_expBlock_inputBox'>
                  <input 
                    className={expMonthStyle}
                    placeholder='MM'
                    type='number'
                    value={expMonth}
                    onChange={(e) => setExpMonth(e.target.value)}
                  ></input>
                  <input
                    className={expYearStyle}
                    placeholder='YY'
                    type='number'
                    value={expYear}
                    onChange={(e) => setExpYear(e.target.value)}
                  ></input>
                </div>
                <div className='rightSide__boxContent_cardNumberFiled_error'>{monthYearError}</div>
              </div>

              <div className='rightSide__boxContent_expCVCFiled_cvcField'>
                <p className='rightSide__boxContent_expCVCFiled_cvcField_title'>CVC</p>
                <input
                  className={styleCVC}
                  placeholder='e. g. 123'
                  type='text'
                  value={CVC}
                  onChange={(e) => setCVC(e.target.value)}
                ></input>
                <div className='rightSide__boxContent_expCVCFiled_cvcField_error'>{CVCError}</div>
              </div>
            </div>

            <button onClick={() => confirmForm()}>Confirm</button>
          </div>
        ) : (
          <div className='rightSide__boxCompleted'>
            <img src={completed}/>
            <h1>THANK YOU!</h1>
            <p>We've added your card details</p>
            <button onClick={() => {
              setStep('enterData')
            }}>Continue</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
