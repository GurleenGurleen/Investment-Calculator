
import Header from './Components/Header';
import UserInput from './Components/UserInput';
import Result from './Components/Result';
import { useState } from 'react';

function App() {

  const [userInput, setUserInput] = useState(null);

  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };

  if (userInput) {

    const yearlyData = []; // per-year results

    let currentSavings = +userInput.currentSaving; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput.yearlySaving; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput.expectedInterest / 100;
    const duration = +userInput.duration;

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div>
      <Header />

      <UserInput onCalculate={calculateHandler} />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      <Result />
    </div>
  );
}

export default App;
