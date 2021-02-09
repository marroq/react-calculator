import React from 'react';
import Number from './components/Number';

const App= () => {
  const[number, setNumber] = React.useState("");
  const[operands, setOperands] = React.useState([]);

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
      <div align="center">{number}</div>
      <div align="center">
          {operands.map((operand) => <li>{operand}</li>)}
          {operands.length}
      </div>
    </div>
  );
}

export default App;
