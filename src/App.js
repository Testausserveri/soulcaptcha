import './App.css';
import { BotCheck } from './components/BotCheck/BotCheck';
import { Content } from './components/Content/Content';
import { useState } from 'react';
import { Agreement } from './components/Agreement/Agreement';

function App() {
  const [agreementVisible, setAgreementVisible] = useState(false)
  const [details, setDetails] = useState({
    firstName: "Pasi",
    lastName: "Viheraho"
  })

  return (
    <div className="App">
      <Agreement details={details} visible={agreementVisible} />
      <Content>
        <h1>
          You won an iPhone 15 Pro
          <br/> Max Ultra!
        </h1>
        <p>
          Please fill this form to claim your prize.
        </p>
        <div className="TextBoxContainer">
          <div style={{ marginRight: '15px' }}>
            <p className="InputTitle">First Name</p>
            <input/>
          </div>
          <div>
            <p className="InputTitle">Last Name</p>
            <input/>
          </div>
        </div>
      </Content>
      <BotCheck visible={!agreementVisible} />
      <Content>
        <button onClick={() => setAgreementVisible(true)}>OK</button>
      </Content>
    </div>
  )
}

export default App;
