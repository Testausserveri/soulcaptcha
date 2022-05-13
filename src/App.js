import logo from './logo.svg';
import './App.css';
import { Signature } from './components/Signature/Signature';
import { Content } from './components/Content/Content';

function App() {
  return (
    <div className="App">
      <Content>
          <h1>
              You won an iPhone 15 Pro Ultra!
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
      <Signature />
    </div>
  );
}

export default App;
