import wordBank from '../wordle-bank.txt'
import wordBankEasy from '../worlde-bank-easy.txt'

export const generateWordSet = async () => {
  const res = await fetch(wordBank)
  const data = await res.text()

  const res3 = await fetch(wordBankEasy)
  const dataNl = await res3.text()
  let wordArr = data.split("\n")
  let wordArrEasy = dataNl.split("\n")
  let chosenWord = wordArrEasy[Math.floor(Math.random()* wordArrEasy.length)]

  return {chosenWord, wordArr}
}

