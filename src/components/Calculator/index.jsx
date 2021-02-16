import React from 'react';
import Display from '../Display';
import Number from '../Number';
import OperationEditor from '../OperationEditor';

const Calculator = () => {
    const[currentNumber, setCurrentNumber] = React.useState('');
    
    return (
        <div align="center">
            <Display
                number={currentNumber}
            />
            <table>
                <tr>
                    <td>
                        <Number 
                            displayNumber={7}
                            currentNumber={currentNumber}
                            setCurrentNumber={setCurrentNumber}
                        />
                    </td>
                    <td>
                        <Number 
                            displayNumber={8}
                            currentNumber={currentNumber}
                            setCurrentNumber={setCurrentNumber}
                        />
                    </td>
                    <td>
                        <Number 
                            displayNumber={9}
                            currentNumber={currentNumber}
                            setCurrentNumber={setCurrentNumber}
                        />
                    </td>
                </tr>
                <tr>
                    <td>
                        <Number 
                            displayNumber={4}
                            currentNumber={currentNumber}
                            setCurrentNumber={setCurrentNumber}
                        />
                    </td>
                    <td>
                        <Number 
                            displayNumber={5}
                            currentNumber={currentNumber}
                            setCurrentNumber={setCurrentNumber}
                        />
                    </td>
                    <td>
                        <Number 
                            displayNumber={6}
                            currentNumber={currentNumber}
                            setCurrentNumber={setCurrentNumber}
                        />
                    </td>
                </tr>
                <tr>
                    <td>
                        <Number 
                            displayNumber={1}
                            currentNumber={currentNumber}
                            setCurrentNumber={setCurrentNumber}
                        />
                    </td>
                    <td>
                        <Number 
                            displayNumber={2}
                            currentNumber={currentNumber}
                            setCurrentNumber={setCurrentNumber}
                        />
                    </td>
                    <td>
                        <Number 
                            displayNumber={3}
                            currentNumber={currentNumber}
                            setCurrentNumber={setCurrentNumber}
                        />
                    </td>
                </tr>
            </table>
            <OperationEditor
                currentNumber={currentNumber}
            />
        </div>
    );
};

export default Calculator;
