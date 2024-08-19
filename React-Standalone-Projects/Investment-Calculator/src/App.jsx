import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";
import { useState } from "react";
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid =
    userInput.duration >= 1 &&
    userInput.initialInvestment >= 0 &&
    userInput.annualInvestment >= 0 &&
    userInput.expectedReturn >= 0;

  function handleUserInputChange(e) {
    setUserInput((prevUserInputState) => ({
      ...prevUserInputState,
      [e.target.name]: Number(e.target.value),
    }));
  }

  return (
    <>
      <Header />
      <UserInput
        userInput={userInput}
        onUserInputChange={handleUserInputChange}
      />
      {inputIsValid ? (
        <Results userInput={userInput} />
      ) : (
        <p> Please enter valid input data</p>
      )}
    </>
  );
}

export default App;
