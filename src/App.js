import React from "react";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import Modal from "./components/Modal";
import { AppContext } from './context/appContext';
import {BrowserRouter as Router} from 'react-router-dom'
import ResetModal from "./components/ResetModal";
import Alert from "./components/Alert";
import styled from 'styled-components'


function App() {
  const {showModal, showResetModal, showAlert} = React.useContext(AppContext)
  return (
    <Router>
    <Wrapper>
      <div className="title-container">
        <h1>Woordle</h1>
        </div> 
      {showAlert && <Alert/>}
      <div className="content-container">
        <Board/>
      </div>
        <Keyboard/>
     {showModal && <Modal/>}
      {showResetModal && <ResetModal/>}
    </Wrapper>
    </Router>

  );
}

const Wrapper = styled.div`
width: 100vw;
height: 100vh;

h1 {
  border-bottom: 1px solid var(--primary-gray-3);
  width: 100vw;
}

.title-container {
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.content-container {
  display: flex;
  flex-direction:column ;
  height: calc(100% - 195px - 65px);
}
`

export default App;
