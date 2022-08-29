import React, {useContext} from 'react'
import styled from 'styled-components'
import { AppContext } from '../context/appContext'

const ResetModal = () => {
  const {setShowResetModal, resetLocalStorage} = useContext(AppContext)
  return (
    <Wrapper>
      <div className="reset-modal-container">
        <div className="reset-modal">
          <p>Het resetten van de statistieken kan niet ongedaan gemaakt worden. Weet je zeker dat je verder wilt gaan?</p>
        <div className="btn-container">
          <button onClick={() =>resetLocalStorage()}>Ja, graag.</button>
          <button onClick={() => setShowResetModal(false)}>Nee, dank je.</button>
        </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
font-size: 1rem;

.reset-modal-container {
  background: var(--primary-black);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
.reset-modal {
  background-color: #1c1c1d;;;
  margin-top: 100px;
  width: 90%;
  border-radius: 5px;
  border: 1px solid var(--primary-gray);
  padding: 1em 2em;
  max-width: 350px;
  height: 30vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}

.btn-container {
  padding: 3em 0;
  display: flex;
  justify-content: center;
  column-gap: 3em;
  margin: 0 auto;
}


`

export default ResetModal