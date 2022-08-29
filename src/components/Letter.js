import React, {useEffect} from 'react'
import { AppContext } from '../context/appContext'

const Letter = ({rowVal, letterPos}) => {
  const {board, currVal, setDisabledLetters, setCorrectLetters, correctWord} = React.useContext(AppContext)

  const letter = board[rowVal][letterPos]
  const wordToBeGuessed = correctWord.toUpperCase()
  const correct = wordToBeGuessed[letterPos] === letter
  const almost = !correct && (wordToBeGuessed.includes(letter))

  let letterState = currVal.row > rowVal && (correct ? "correct" : almost ? "almost" : "wrong") 

  useEffect(() => {
    if(letter !== "" && !correct && !almost){
      setDisabledLetters(prev => [...prev, letter]);
    }else if(letter !== ""  && !almost){
      setCorrectLetters(prev => [...prev, letter])
    }
  }, [currVal.row])

  return (
    <div className={ letter ? `row-item animated ${letterState}` : `row-item  ${letterState}`}>{letter}</div>
  )
}

export default Letter