import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Button, { VARIANT } from './components/Button';

import Header from './components/header/Header';
import ButtonGroup from './components/loginMethod/ButtonGroup';
import Inputs from './components/inputs/Input';
import Line from './components/Line';


function App() {
  const [isPhone, setIsPhone] = useState(false);
  const [isValidInput, setIsValidInput] = useState(false)

  return (
    <>
      <div className="App">
        <Header props />
        <ButtonGroup isPhone={isPhone} clicked={(val) => {
          setIsPhone(val)
        }} />
        <Inputs isPhone={isPhone} isValid={(valid) => {
          setIsValidInput(valid)
        }} />

        <Button variant={isValidInput ? VARIANT.PRIMARY : VARIANT.DISABLED} navigateRouteName="verification" >Continue</Button>
        <div style={{ height: 10 }}>
          by clicking continue you must agree to near labs Terms & Conditions ans Privacy Policy

        </div>
        <div>
          <Line />
        </div>
        <div style={{ height: 10 }}>
          Already have NEAR account?

        </div>
        <div style={{ height: 60, marginTop: 20 }}>
          <Button variant={VARIANT.SECONDARY} navigateRouteName="verification" >Log in with near</Button>

        </div>
      </div>
    </>
  );
}

export default App;
