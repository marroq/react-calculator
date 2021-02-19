import React from 'react';
import Display from '../Display';
import Number from '../Number';
import Operator from '../Operator';
import Result from '../Result';

const Calculator = () => {
    const[currentNumber, setCurrentNumber] = React.useState('');
    const[currentOperations, setCurrentOperation] = React.useState([]);
    const[saveOperation, setSaveOperation] = React.useState(false);

    let handlerCurrentOperation = (operand, operator) => {
        setCurrentOperation([...currentOperations, operand, operator]);
    }

    let handlerNumberReset = () => {
        setCurrentNumber('');
    }

    let handlerCurrentNumber = (number) => {
        setSaveOperation(true);
        setCurrentNumber(currentNumber + number);
    }

    let handlerResult = () => {
        setCurrentNumber('');
    }

    let showOperation = () => {
        let operation = '';

        currentOperations.map((value) => (
            operation+=value
        ));

        return operation;
    }

    let saveOperations = (operand, operator) => {
        if (saveOperation) {
            handlerCurrentOperation(operand, operator);
            handlerNumberReset();
            setSaveOperation(false);
        }
    }

    return (
        <div align="center">
            <h2>{showOperation()}</h2>
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
                    <td></td>
                    <td>
                        <Number
                            displayNumber={0}
                            setCurrentNumber={handlerCurrentNumber}
                        />
                    </td>
                    <td></td>
                </tr>
                <tr>
                    <td>
                        <Operator 
                            operand={currentNumber}
                            displayOperator={'+'}
                            setOperation={saveOperations}
                        />
                    </td>
                    <td>
                        <Operator
                            operand={currentNumber}
                            displayOperator={'-'}
                            setOperation={saveOperations}
                        />
                    </td>
                    <td>
                        <Operator
                            operand={currentNumber}
                            displayOperator={'*'}
                            setOperation={saveOperations}
                        />
                    </td>
                </tr>
                <tr>
                    <td>
                        <Operator
                            operand={currentNumber}
                            displayOperator={'÷'}
                            setOperation={saveOperations}
                        />
                    </td>
                    <td>
                        <Result
                            setResult={handlerResult}
                        />
                    </td>
                </tr>
            </table>
        </div>
    );
};

export default Calculator;
