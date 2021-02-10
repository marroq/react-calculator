import React from 'react';
import Number from './components/Number';
import SumOperator from './components/SumOperator';

const App= () => {
  const[number, setNumber] = React.useState("");
  const[result, setResult] = React.useState(0);
  
  return (
    <div align="center">
      <Number
        inputNumber={number}
        displayNumber={1}
        setDisplay = {setNumber}
      />
      <Number
        inputNumber={number}
        displayNumber={2}
        setDisplay = {setNumber}
      />
      <SumOperator
        firstOperand={1}
        secondOperand={2}
        result={result}
        onSum={setResult}
      />
      <div align="center">{number}</div>
      <div align="center">{result}</div>
    </div>
  );
}

export default App;
