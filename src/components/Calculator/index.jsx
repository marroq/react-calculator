import React from 'react';
import Display from '../Display';
import Number from '../Number';
import OperationEditor from '../OperationEditor';

const Calculator = () => {
    const[currentNumber, setCurrentNumber] = React.useState('');
    const[currentOperation, setCurrentOperation] = React.useState([]);

    handlerCurrentOperation = (elementOperation) => {
        setCurrentOperation([...currentOperation, elementOperation]);
    }

    handlerCurrentNumber = (number) => {
        setCurrentNumber(currentNumber + number);
    }
    
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
                            setCurrentNumber={handlerCurrentNumber}
                        />
                    </td>
                    <td>
                        <Number 
                            displayNumber={8}
                            setCurrentNumber={handlerCurrentNumber}
                        />
                    </td>
                    <td>
                        <Number 
                            displayNumber={9}
                            setCurrentNumber={handlerCurrentNumber}
                        />
                    </td>
                </tr>
                <tr>
                    <td>
                        <Number 
                            displayNumber={4}
                            setCurrentNumber={handlerCurrentNumber}
                        />
                    </td>
                    <td>
                        <Number 
                            displayNumber={5}
                            setCurrentNumber={handlerCurrentNumber}
                        />
                    </td>
                    <td>
                        <Number 
                            displayNumber={6}
                            setCurrentNumber={handlerCurrentNumber}
                        />
                    </td>
                </tr>
                <tr>
                    <td>
                        <Number 
                            displayNumber={1}
                            setCurrentNumber={handlerCurrentNumber}
                        />
                    </td>
                    <td>
                        <Number 
                            displayNumber={2}
                            setCurrentNumber={handlerCurrentNumber}
                        />
                    </td>
                    <td>
                        <Number 
                            displayNumber={3}
                            setCurrentNumber={handlerCurrentNumber}
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
