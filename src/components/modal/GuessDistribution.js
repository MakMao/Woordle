import React, {useContext} from 'react'
import styled from 'styled-components'
import { AppContext } from '../../context/appContext';

const GuessDistribution = () => {
  const {stats, gameOver, correctWord} = useContext(AppContext)
  
  const nummy = stats.num.split('')
  const arrLength = stats.num.length
  const num1 = nummy.filter((item) => item === '0').length - 1
  const num1style = (((nummy.filter((item) => item === '0').length) / arrLength) * 100).toFixed(2)
  const num2 = nummy.filter((item) => item === '1').length
  const num2style = (((nummy.filter((item) => item === '1').length) / arrLength) * 100).toFixed(2)
  const num3 = nummy.filter((item) => item === '2').length
  const num3style = (((nummy.filter((item) => item === '2').length) / arrLength) * 100).toFixed(2)
  const num4 = nummy.filter((item) => item === '3').length
  const num4style = (((nummy.filter((item) => item === '3').length) / arrLength) * 100).toFixed(2)
  const num5 = nummy.filter((item) => item === '4').length
  const num5style = (((nummy.filter((item) => item === '4').length) / arrLength) * 100).toFixed(2)
  const num6 = nummy.filter((item) => item === '5').length
  const num6style = (((nummy.filter((item) => item === '5').length) / arrLength) * 100).toFixed(2)
  return (
    <Wrapper>
      {(gameOver.guessWord && !gameOver.maxAttempts && stats.num !== []) && (
      <div className="guess-distribution">
       <h3>RESULTATEN</h3>
        <div>
          <div className="guess-container">
            <h4>1</h4>
            <div className="guess" style={{width: `${num1 > 0 ? `calc(${num1style}% + 20px)` : '20px' }`}}>{num1}</div>
          </div>
          <div className="guess-container">
            <h4>2</h4>
            <div className="guess" style={{width: `${num2 > 0 ? `calc(${num2style}% + 20px)` : '20px' }`}}>{num2}</div>
          </div>
          <div className="guess-container">
            <h4>3</h4>
            <div className="guess" style={{width: `${num3 > 0 ? `calc(${num3style}% + 20px)` : '20px' }`}}>{num3}</div>
          </div>
          <div className="guess-container">
            <h4>4</h4>
            <div className="guess" style={{width: `${num4 > 0 ? `calc(${num4style}% + 20px)` : '20px' }`}}>{num4}</div>
          </div>
          <div className="guess-container">
            <h4>5</h4>
            <div className="guess" style={{width: `${num5 > 0 ? `calc(${num5style}% + 20px)` : '20px' }`}}>{num5}</div>
          </div>
          <div className="guess-container">
            <h4>6</h4>
            <div className="guess" style={{width: `${num6 > 0 ? `calc(${num6style}% + 20px)` : '20px' }`}}>{num6}</div>
          </div>
        </div>
      </div>
      )}
      {(!gameOver.guessWord && gameOver.maxAttempts) && (
        <div className="helaas">
          <p className="helaas-text">Helaas, je hebt verloren.</p>
          <p>Het juiste woord was <span>{correctWord}</span> </p>
        </div>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
.guess-distribution {
  padding: 0 3em;
}

.guess-distribution > h3 {
  margin-bottom: 1em;
  display: flex;
  justify-content: center;
}

.guess-container > h4 {
  margin-right: 0.4em;
}

.guess-container { 
  display: flex;
}

.guess {
  margin-bottom: 0.5em;
  height: 20px;
  background-color: pink;
  display: flex;
  justify-content: flex-end;
  padding: 0 0.3em;
  align-items: center;
  background-color: var(--primary-gray-3) ;
}

.helaas {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
span{
  color: red;
  text-transform: uppercase;
}

.helaas-text{ 
  margin-bottom: .5em;
}
`

export default GuessDistribution