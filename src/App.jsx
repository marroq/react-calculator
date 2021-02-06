import React from 'react';
import Number from './components/Number';

const App= () => {
  const[number, setNumber] = React.useState(0);

  return (
    <div>
      <Number
        inputNumber={5}
        onPushed = {(inputNumber) => setNumber(number + 1)}
      />
      {number}
    </div>
  );
}

export default App;
