import Header from './components/Header.jsx';
import UserInput from './components/UserInput.jsx';
import Result from './components/Result.jsx';
import { useState } from 'react';

function App() {
  const input = {
        "investment-amount": 10000,
        "annual-investment": 1200,
        "expected-return": 5,
        "duration": 10
    }
  return (
      <>
        <Header />
        <UserInput />
        <Result input = {input}/>
      </>
  );
}

export default App;

