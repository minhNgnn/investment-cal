import Header from './components/Header.jsx';
import UserInput from './components/UserInput.jsx';
import Result from './components/Result.jsx';
import { useState } from 'react';

function App() {
  const [inputValues, setInputValues] = useState({
      investmentAmount: 10000,
      annualInvestment: 1200,
      expectedReturn: 5,
      duration: 10,
  });

  
  function handleInputChange(id, newValue) {
      setInputValues((prevValues) => ({
          ...prevValues,
          [id]: newValue
      }));
  }

  const isInputValid = inputValues.duration >= 1
  return (
      <>
        <Header />
        <UserInput inputValues = {inputValues} handleInputChange = {handleInputChange}/>
        
        {isInputValid ? <Result input = {inputValues}/> : <p>"Please enter a duration larger than 0</p>}
      </>
  );
}

export default App;

