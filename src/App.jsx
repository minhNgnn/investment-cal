import Header from './components/Header.jsx';
import UserInput from './components/UserInput.jsx';
import Result from './components/Result.jsx';
import { useState } from 'react';

function App() {
  const [inputValues, setInputValues] = useState({
          "investment-amount": 10000,
          "annual-investment": 1200,
          "expected-return": 5,
          "duration": 10
      });
  
      function handleInputChange(id, newValue) {
          setInputValues((prevValues) => ({
              ...prevValues,
              [id]: newValue
          }));
      }
  return (
      <>
        <Header />
        <UserInput inputValues = {inputValues} handleInputChange = {handleInputChange}/>
        <Result input = {inputValues}/>
      </>
  );
}

export default App;

