import React from 'react';
import Number from './components/Number';
import Operator from './components/Operator';

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
      <Operator
        displayOperator={'+'}
        operand={number}
        operands={operands}
        setOperands={setOperands}
        setNumber={setNumber}
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
