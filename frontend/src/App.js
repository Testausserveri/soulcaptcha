import './App.css';
import { BotCheck } from './components/BotCheck/BotCheck';
import { Content } from './components/Content/Content';
import { useRef, useState } from 'react';
import { Agreement } from './components/Agreement/Agreement';
import { Spinner } from './components/Spinner/Spinner';
import { api } from './api';

function App() {
  const [agreementVisible, setAgreementVisible] = useState(false)
  const [spinning, setSpinning] = useState(false)

  const canvasRef = useRef()
  const firstNameRef = useRef()
  const lastNameRef = useRef()
  const emailRef = useRef()

  function submit() {
    let errorClasses = []
    if (canvasRef.current.isEmpty()) errorClasses.push("errorSignature")
    if (firstNameRef.current.value.trim().length === 0) errorClasses.push("errorFirstName")
    if (lastNameRef.current.value.trim().length === 0) errorClasses.push("errorLastName")
    if (emailRef.current.value.trim().length === 0) errorClasses.push("errorEmail")
    if (errorClasses.length > 0) {
      document.body.classList.add(...errorClasses)
      setTimeout(() => {
        document.body.classList.remove(...errorClasses)
      }, 1000)
      return
    }
    api.submit({
      signature: canvasRef.current.toDataURL(),
      firstName: firstNameRef.current.value.trim(),
      lastName: lastNameRef.current.value.trim(),
      email: emailRef.current.value.trim()
    })
    setSpinning(true)
    setTimeout(() => {
      setAgreementVisible(true)
      document.title = "Sign an agreement"
    }, 1000)
  }

  return (
    <div className="App">
      <Agreement details={{
        firstName: firstNameRef.current?.value,
        lastName: lastNameRef.current?.value
      }} visible={agreementVisible} />
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
            <input name="firstName" ref={firstNameRef} spellCheck={false} />
          </div>
          <div style={{ marginRight: '15px' }}>
            <p className="InputTitle">Last Name</p>
            <input name="lastName" ref={lastNameRef} spellCheck={false} />
          </div>
          <div>
            <p className="InputTitle">Email</p>
            <input type="email" name="email" ref={emailRef}  />
          </div>
        </div>
      </Content>
      <BotCheck 
        visible={!agreementVisible} 
        canvasRef={canvasRef}
        />
      <Content>
        <button onClick={() => submit()}>
          {spinning ? <Spinner /> : "Claim your Prize"}
        </button>
        <span className="fillNotice">Please fill in all fields</span>
      </Content>
    </div>
  )
}

export default App;
