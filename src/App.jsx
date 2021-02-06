import React from 'react';
import Number from './components/Number';
import Operator from './components/Operator';

const App= () => {
  const[number, setNumber] = React.useState("");
  
  return (
    <div align="center">
      {number}
      <Number
        inputNumber={number}
        displayNumber={1}
        onPushed = {setNumber}
      />
      <Number
        inputNumber={number}
        displayNumber={2}
        onPushed = {setNumber}
      />
      <Operator
        operand={'+'}
      />
    </div>
  );
}

export default App;
