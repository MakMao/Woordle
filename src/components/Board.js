import React from 'react'
import { AppContext } from '../context/appContext'
import Letter from './Letter'
import styled from 'styled-components'

const Board = () => {
   const { currVal, showAlert} = React.useContext(AppContext)
  return (
    <Wrapper>
      <div className="board">
      <div className={showAlert && currVal.row === 0 ? 'row bounce-effect': 'row'}>
        <Letter rowVal={0} letterPos={0}/>
        <Letter rowVal={0} letterPos={1}/>
        <Letter rowVal={0} letterPos={2}/>
        <Letter rowVal={0} letterPos={3}/>
        <Letter rowVal={0} letterPos={4}/>
      </div>
      <div className={showAlert && currVal.row === 1 ? 'row bounce-effect': 'row'}>
        <Letter rowVal={1} letterPos={0}/>
        <Letter rowVal={1} letterPos={1}/>
        <Letter rowVal={1} letterPos={2}/>
        <Letter rowVal={1} letterPos={3}/>
        <Letter rowVal={1} letterPos={4}/>
      </div>
      <div className={showAlert && currVal.row === 2 ? 'row bounce-effect': 'row'}>
        <Letter rowVal={2} letterPos={0}/>
        <Letter rowVal={2} letterPos={1}/>
        <Letter rowVal={2} letterPos={2}/>
        <Letter rowVal={2} letterPos={3}/>
        <Letter rowVal={2} letterPos={4}/>
      </div>
      <div className={showAlert && currVal.row === 3 ? 'row bounce-effect': 'row'}>
        <Letter rowVal={3} letterPos={0}/>
        <Letter rowVal={3} letterPos={1}/>
        <Letter rowVal={3} letterPos={2}/>
        <Letter rowVal={3} letterPos={3}/>
        <Letter rowVal={3} letterPos={4}/>
      </div>
      <div className={showAlert && currVal.row === 4 ? 'row bounce-effect': 'row'}>
        <Letter rowVal={4} letterPos={0}/>
        <Letter rowVal={4} letterPos={1}/>
        <Letter rowVal={4} letterPos={2}/>
        <Letter rowVal={4} letterPos={3}/>
        <Letter rowVal={4} letterPos={4}/>
      </div>
      <div className={showAlert && currVal.row === 5 ? 'row bounce-effect': 'row'}>
        <Letter rowVal={5} letterPos={0}/>
        <Letter rowVal={5} letterPos={1}/>
        <Letter rowVal={5} letterPos={2}/>
        <Letter rowVal={5} letterPos={3}/>
        <Letter rowVal={5} letterPos={4}/>
      </div>
    </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  flex-grow: 1;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1em 0; 
}

.board {
  margin: 0 auto; 
  height: 100%;
  max-width: 350px;
  max-height: 420px;
  aspect-ratio: 5 / 6;
  display: grid;
  grid-template-rows: repeat(6, 1fr);
  grid-gap: 5px;
}

.row {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  height: 100%;
  max-height: 70px;
  grid-gap: 5px;
}

@media (max-width: 376px){
.board {
  margin: 1em 2em 0 2em;
  }
}

.bounce-effect {
  animation-name: bounce;
  animation-duration: 0.3s;
}

@keyframes bounce {
  0%  {transform: translate(0)}
  20% {transform: translate(-7px)}
  40% {transform: translate(7px)}
  60% {transform: translate(-7px)}
  80% {transform: translate(7px)}
  100% {transform: translate(-7px)}
}

`
export default Board