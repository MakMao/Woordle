import React, {useContext} from 'react'
import styled from 'styled-components'
import { AppContext } from '../../context/appContext'

const ResetStats = () => {
const {openResetModal} = useContext(AppContext)
  return (
    <Wrapper>
    <div className="reset-stats">
        <h3>RESET STATISTIEKEN</h3>
        <div className="btn-container">
          <button className="btn" onClick={() => openResetModal()}>Klik Hier</button>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
.reset-stats {
  display: flex;
  flex-direction: column;
}

.reset-stats > h3 {
  margin: 0 auto;
}

.btn-container {
  margin: 0 auto;
  padding-top: 1em;
}
`

export default ResetStats