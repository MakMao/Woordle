import React from 'react'
import styled from 'styled-components'

const Alert = () => {  
  return (
    <Wrapper>
      <div className="modal-word">
        <p>Niet in woordenlijst</p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`

.modal-word {
  margin: 0 auto;
  background-color: #fff;
  font-size: 0.875rem;
  position: fixed;
  left: 50%;
  top: 50px;
  display: flex;
  z-index: 300;
  justify-content: center;
  transform: translateX(-50%);
  padding: 0.5em;
  border-radius: 5px;
  width: 170px;
  color: black;
}

p {
  font-size: 1rem;
  font-weight: bold;
}
`

export default Alert