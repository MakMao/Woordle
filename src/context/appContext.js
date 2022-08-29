import React, {useEffect, useState} from "react";
import { generateWordSet } from "../utils/WordArr";
import { boardDefault } from "../utils/boardDefault";
export const AppContext = React.createContext()

const getLocalStorage = () => {
    let results =  localStorage.getItem('results')
    if(results){
      return JSON.parse(localStorage.getItem('results'))
    }else {
      return {games: 0, correctWords: 0, num: '0', currStreak: 0}
    }
  }

export const AppProvider = ({children}) => {
  const [board, setBoard] = useState(boardDefault)
  const [currVal, setCurrVal] = useState({row: 0, pos: 0})
  const [disabledLetters, setDisabledLetters] = useState([])
  const [correctLetters, setCorrectLetters] = useState([])
  const [correctWord, setCorrectWord] = useState('')
  const [allWords, setAllWords] = useState([])
  const [gameOver, setGameOver] = useState({guessWord: false, maxAttempts: false})
  const [showModal, setShowModal] = useState(false)
  const [showResetModal, setShowResetModal] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  const [stats, setStats] = useState(getLocalStorage())

  const removeAlert = () => {
    setTimeout(() => {
      setShowAlert(false)
    }, 1000)
  }


const onEnter = () => {
  if(currVal.pos !== 5) return
  let currWord = ""
  for(let i = 0; i < 5; i++){
    currWord+= board[currVal.row][i]
  }

  if(allWords.includes(currWord.toLowerCase())){
    setCurrVal({row: currVal.row + 1, pos: 0})
  }
  else {
    setShowAlert(true)
    removeAlert()
  }

  if(currWord.toLowerCase() === correctWord) {
    setGameOver({guessWord: true, maxAttempts: false})
    setStats({...stats, games: stats.games + 1, correctWords: stats.correctWords + 1, num: stats.num + currVal.row, currStreak: stats.currStreak + 1})
    setTimeout(() => {
      setShowModal(true)
    }, 700)

  }else if (currVal.row === 5 && !showModal && allWords.includes(currWord.toLowerCase())){
    setGameOver({guessWord: false, maxAttempts: true})
    setStats({...stats, games: stats.games + 1, currStreak: 0})
    setShowModal(true)
  }
}

console.log(showAlert);

  const onDelete = () => {
    if(currVal.pos < 1) return
    const newBoard = [...board]
    newBoard[currVal.row][currVal.pos - 1] = ""
    setCurrVal({...currVal, pos: currVal.pos - 1})
  }

  const selectLetter = (keyVal) => {
  if(keyVal === "ENTER"){
    onEnter()
  }
  if(keyVal === "DEL"){
    onDelete()
  }
  else if(keyVal !== "ENTER" && currVal.pos < 5){
    const newBoard = [...board]
    newBoard[currVal.row][currVal.pos] = keyVal
    setBoard(newBoard)
    setCurrVal({...currVal, pos: currVal.pos + 1})
  }
}

  useEffect(() => {
  generateWordSet().then(words => {
    setCorrectWord(words.chosenWord)
    setAllWords(words.wordArr)
  })
}, [])
  
  useEffect(() => {
    localStorage.setItem('results', JSON.stringify(stats))
  }, [stats])

  const closeModal = () => {
    window.location.reload()
}

const openResetModal = () => {
  setShowResetModal(true)
}

const resetLocalStorage = () => {
  localStorage.clear()
  window.location.reload()
}

const value = {board, currVal, selectLetter, disabledLetters, setDisabledLetters, correctLetters, setCorrectLetters, onEnter, onDelete, correctWord, gameOver, setGameOver, stats, setStats, showModal, closeModal, setShowResetModal, openResetModal, resetLocalStorage, showAlert, showResetModal}

  return (
  <AppContext.Provider value={value}>
    {children}
  </AppContext.Provider>
  )
}