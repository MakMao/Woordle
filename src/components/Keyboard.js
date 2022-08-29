import React, {useCallback, useEffect} from 'react'
import { AppContext } from '../context/appContext';
import Key from './Key';
import styled from 'styled-components';

const Keyboard = () => {
  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

  const {disabledLetters, correctLetters, selectLetter, onEnter, onDelete, gameOver} = React.useContext(AppContext)

  const handleKeyboard = useCallback((event) => {
    if(event.key === "Backspace"){
      onDelete()
    }
    if(event.key === "Enter"){
      onEnter()
    }
    keys1.forEach((key) =>{
      if(event.key.toLowerCase() === key.toLowerCase()){
        selectLetter(key)
      }
    })
    keys2.forEach((key) =>{
      if(event.key.toLowerCase() === key.toLowerCase()){
        selectLetter(key)
      }
    })
    keys3.forEach((key) =>{
      if(event.key.toLowerCase() === key.toLowerCase()){
        selectLetter(key)
      }
    })
  })

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard)
    return () => {
      document.removeEventListener("keydown", handleKeyboard)
    }
  }, [handleKeyboard])
  return (
    <Wrapper>
      <div>
        {(!gameOver.guessWord && !gameOver.maxAttempts) && (
        <div className="keyboard" onKeyDown={handleKeyboard}>
        <div className="line">
          {keys1.map((item, i) => {
            return <Key disabled={disabledLetters.includes(item)} correctAns={correctLetters.includes(item)} value={item} key={i}/>
          })}
        </div>
        <div className="line">
          <Key value="" empty />
          {keys2.map((item, i) => {
            return <Key disabled={disabledLetters.includes(item)} correctAns={correctLetters.includes(item)} value={item} key={i}/>
          })}
          <Key value="" empty />
        </div>
        <div className="line ">
          <Key value="ENTER" big/>
          {keys3.map((item, i) => {
            return <Key disabled={disabledLetters.includes(item)} correctAns={correctLetters.includes(item)} value={item} key={i}/>
          })}
          <Key value={`DEL`} big/>
        </div>
      </div>
        )}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
height: 195px !important;

.keyboard {
  width: 95%;
  max-width: 484px;
  margin: 0 auto;
}

.line {
  display: flex;
  justify-content: center;
  column-gap: 5px;
  margin-bottom: 5px;
}

.key {
  cursor: pointer;
  margin: 0 6px 0 0;
  font-weight: bold;
  font-size:12px;
  color: #fff;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--primary-gray);
  width: 100%;
  height: 58px;
  margin: 0 auto;

  @media (min-width: 500px){
    .key {
      font-size: 1rem;
    }
  }
}

.correct-ans {
  background-color: var(--primary-green);
}

.disabled {
  background-color: #3a393c;
}
`

export default Keyboard