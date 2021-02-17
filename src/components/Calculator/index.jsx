import React from 'react';
import Display from '../Display';
import Number from '../Number';
import Operator from '../Operator';
import Result from '../Result';

const Calculator = () => {
    const[currentNumber, setCurrentNumber] = React.useState('');
    const[currentOperation, setCurrentOperation] = React.useState([]);

    let handlerCurrentOperation = (elementOperation) => {
        setCurrentOperation([...currentOperation, elementOperation]);
    }

    let handlerCurrentNumber = (number) => {
        setCurrentNumber(currentNumber + number);
    }

    let handlerResult = () => {
        setCurrentNumber('');
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
                <tr>
                    <td>
                        <Operator 
                            displayOperator={'+'}
                            setOperator={handlerCurrentOperation}
                        
                        />
                    </td>
                    <td>
                        <Operator
                            displayOperator={'-'}
                            setOperator={handlerCurrentOperation}
                        />
                    </td>
                    <td>
                        <Operator
                            displayOperator={'*'}
                            setOperator={handlerCurrentOperation}
                        />
                    </td>
                    <td>
                        <Operator
                            displayOperator={'/'}
                            setOperator={handlerCurrentOperation}
                        />
                    </td>
                </tr>
                <tr>
                    <Result
                        setResult={handlerResult}
                    />
                </tr>
            </table>
        </div>
    );
};

export default Calculator;
