import logo from './logo.svg';
import './App.css';
import { Signature } from './components/Signature/Signature';
import { Content } from './components/Content/Content';

function App() {
  return (
    <div className="App">
      <Content>
        Moi
      </Content>
      <Signature />
    </div>
  );
}

export default App;
