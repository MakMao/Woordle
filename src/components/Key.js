import React from 'react'
import { AppContext } from '../context/appContext';

const Key = ({value, big, empty, disabled, correctAns}) => {
  const {selectLetter} = React.useContext(AppContext)

  return (
    <div className={disabled ? "key disabled" : correctAns ? "key correct-ans" : "key "} id={big ? "big" : empty ? "empty" : ""} onClick={() => selectLetter(value)}>{value}</div>
  )
}

export default Key