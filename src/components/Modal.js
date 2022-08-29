import React, {useContext} from 'react'
import GuessDistribution from "../components/modal/GuessDistribution"
import { AppContext } from '../context/appContext';
import Statistics from './modal/Statistics';
import ResetStats from './modal/ResetStats';
import styled from 'styled-components';

const Modal = () => {
  const {closeModal} = useContext(AppContext)

  return (
    <Wrapper>
    <div className="modal">
      <Statistics/>
      <div className="underline"></div>

      <GuessDistribution/>
        <div className="underline"></div>

      <ResetStats/>
      <div className="underline"></div>
      
      <div className="next-game">
        <button onClick={() => closeModal()}>Volgende spel!</button>
      </div>
    </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
font-size: 1rem;

.modal {
  position: fixed;
  top: 320px;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #1c1c1d;;
  width: 95%;
  max-width: 400px;
  border: 1px solid var(--primary-gray);
  height: fit-content;
  border-radius: 5px;
}

.next-game {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2em;
}

h3 {
  margin-bottom: 1em;
}
`

export default Modal