import logo from './logo.svg';
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
      <BotCheck visible={!agreementVisible} />
      <Agreement details={details} visible={agreementVisible} />
      <Content>
        <button onClick={() => setAgreementVisible(true)}>OK</button>
      </Content>
    </div>
  );
}

export default App;
