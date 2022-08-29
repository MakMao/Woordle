import React, {useContext} from 'react'
import { AppContext } from '../../context/appContext'
import styled from 'styled-components'

const Statistics = () => {
  const {stats} = useContext(AppContext)
  const total = ((stats.correctWords / stats.games).toFixed(2)) * 100
  return (
    <Wrapper>
    <div className="stats">
      <h3>STATISTIEKEN</h3>
    </div>
      <div className="results">
        <div className="result">
          <h2>{stats.games}</h2>
          <p>Gespeeld</p>
        </div>
        <div className="result">
          <h2>{stats.correctWords}</h2>
          <p>Spellen</p>
          <p>Gewonnen</p>
        </div>
        <div className="result">
          <h2>{stats.currStreak}</h2>
          <p>Current</p>
          <p>Streak</p>
        </div>
        <div className="result">
          <h2>{stats.games > 0 ? total : 0}</h2>
          <p>Win %</p>
        </div>
      </div>
    </Wrapper>         
  )
}

const Wrapper = styled.div`
  padding-top: 2em;

.stats {
  display: flex;
  justify-content: center;
}

.result {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.results {
  display: flex;
  justify-content: center;
  column-gap: 1.3em;
}

.result > h2, p {
  margin: 0;
}

p {
  font-size: 0.75em;
}
`

export default Statistics