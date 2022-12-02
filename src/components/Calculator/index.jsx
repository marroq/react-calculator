import React from 'react';
import Display from '../Display';
import Number from '../Number';
import Operator from '../Operator';
import Result from '../Result';
import ClearAll from '../ClearAll';
import ClearDigit from '../ClearDigit';
import Sign from '../Sign';
import { makeStyles } from '@material-ui/core/styles';

const precedence = {
    DIVMULTI: 2,
    ADDSUBS: 1,
}

const useStyles = makeStyles((theme) => ({
    root: {
      ...theme.typography.button,
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(1),
    },
  }));

const Calculator = () => {
    const[currentNumber, setCurrentNumber] = React.useState('');
    const[currentOperations, setCurrentOperations] = React.useState([]);
    const[saveOperation, setSaveOperation] = React.useState(false);
    const[positiveSign, setPositiveSign] = React.useState(true);

    const classes = useStyles();

    let handlerCurrentOperations = (currentOperation) => {
        setCurrentOperations(currentOperation);
    }

    let handlerCurrentValuesOperations = (operand, operator) => {
        setCurrentOperations([...currentOperations, operand, operator]);
    }

    let handlerCurrentNumber = (currentNumber) => {
        setCurrentNumber(currentNumber);
    }

    let handlerCurrentNumberDigit = () => {
        setCurrentNumber(currentNumber.slice(0,currentNumber.length - 1));
        if (currentNumber.length == 0)
            setSaveOperation(false);
    }

    let addDigit = (digit) => {
        if (!saveOperation)
            setSaveOperation(true);
        setCurrentNumber(currentNumber + digit);
    }

    let setSign = () => {
        if (positiveSign) {
            setCurrentNumber('-' + currentNumber);
            setPositiveSign(false);
        } else {
            setCurrentNumber(currentNumber.slice(1,currentNumber.length));
            setPositiveSign(true);
        }
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
            handlerCurrentValuesOperations(operand, operator);
            handlerCurrentNumber('');
            setSaveOperation(false);
        }
    }

    let clearOperations = () => {
        handlerCurrentOperations([]);
        handlerCurrentNumber('');
        setSaveOperation(false);
    }

    let clearNumber = () => {
        handlerCurrentNumber('');
        setSaveOperation(false);
    }

    let resolveOperation = (currentOperations, currentNumber, level) => {
        prepareOperation(currentOperations, currentNumber, level);

        handlerCurrentNumber('');
    }
 
    let prepareOperation = (currentOperations, currentNumber, level) => {
        let operation = [];
        operation = currentOperations;
        operation.push(currentNumber);

        operate(operation, level);
    }

    let operate = (currentOperations, level) => {
        let operation = [];
        let multiply = false;
        let divide = false;
        let sum = false;
        let substraction = false;
        let resolve = false;

        currentOperations.forEach((value) => {
            if (multiply) {
                operation[operation.length - 1] = operation[operation.length - 1] * parseFloat(value);
                multiply = false;
            } else if (divide) {
                operation[operation.length - 1] = operation[operation.length - 1] / parseFloat(value);
                divide = false;
            } else if (sum) {
                operation[operation.length - 1] = operation[operation.length - 1] + parseFloat(value);
                sum = false;
            } else if (substraction) {
                operation[operation.length - 1] = operation[operation.length - 1] - parseFloat(value);
                substraction = false;
            } else if (!isNaN(parseFloat(value))) {
                operation.push(parseFloat(value));
            } else {
                if (level === precedence.DIVMULTI) {
                    switch(value) {
                        case '*':
                            multiply = true;
                            break;
                        case '÷':
                            divide = true;
                            break;
                        case '+':
                        case '-':
                            operation.push(value);
                            break;
                        default:
                    }
                } else if (level === precedence.ADDSUBS) {
                    switch(value) {
                        case '+':
                            sum = true;
                            break;
                        case '-':
                            substraction = true;    
                            break;
                        default:
                    }
                }
            }
        });

        if (level > precedence.ADDSUBS) operate(operation, --level);
        else resolve = true;

        if (resolve) {
            handlerCurrentOperations(operation);
        }
    }

    return (
        <div className={classes.root} align="center">
            <h2>{showOperation()}{currentNumber}</h2>
            <Display
                number={currentNumber}
            />
            <table>
                <tr>
                    <td>
                        <ClearDigit 
                            displayOperator={'←'}
                            setDigit={handlerCurrentNumberDigit}
                        />
                    </td>
                    <td>
                        <ClearAll
                            displayOperator={'C'}
                            setClear={clearNumber}
                        />
                    </td>
                    <td>
                        <ClearAll
                            displayOperator={'AC'}
                            setClear={clearOperations}
                        />
                    </td>
                    <td>
                        <Operator
                            operand={currentNumber}
                            displayOperator={'÷'}
                            setOperation={saveOperations}
                        />
                    </td>
                </tr>
                <tr>
                    <td>
                        <Number 
                            displayNumber={7}
                            setCurrentNumber={addDigit}
                        />
                    </td>
                    <td>
                        <Number 
                            displayNumber={8}
                            setCurrentNumber={addDigit}
                        />
                    </td>
                    <td>
                        <Number 
                            displayNumber={9}
                            setCurrentNumber={addDigit}
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
                        <Number 
                            displayNumber={4}
                            setCurrentNumber={addDigit}
                        />
                    </td>
                    <td>
                        <Number 
                            displayNumber={5}
                            setCurrentNumber={addDigit}
                        />
                    </td>
                    <td>
                        <Number 
                            displayNumber={6}
                            setCurrentNumber={addDigit}
                        />
                    </td>
                    <td>
                        <Operator
                            operand={currentNumber}
                            displayOperator={'-'}
                            setOperation={saveOperations}
                        />
                    </td>
                </tr>
                <tr>
                    <td>
                        <Number 
                            displayNumber={1}
                            setCurrentNumber={addDigit}
                        />
                    </td>
                    <td>
                        <Number 
                            displayNumber={2}
                            setCurrentNumber={addDigit}
                        />
                    </td>
                    <td>
                        <Number 
                            displayNumber={3}
                            setCurrentNumber={addDigit}
                        />
                    </td>
                    <td>
                        <Operator 
                            operand={currentNumber}
                            displayOperator={'+'}
                            setOperation={saveOperations}
                        />
                    </td>
                </tr>
                <tr>
                    <td>
                        <Sign
                            setSign={setSign}
                        />
                    </td>
                    <td>
                        <Number
                            displayNumber={0}
                            setCurrentNumber={addDigit}
                        />
                    </td>
                    <td>
                        <Number
                            displayNumber={'.'}
                            setCurrentNumber={addDigit}
                        />
                    </td>
                    <td>
                        <Result
                            currentNumber={currentNumber}
                            currentOperations={currentOperations}
                            setResult={resolveOperation}
                        />
                    </td>
                </tr>
            </table>
        </div>
    );
};


export default Calculator;
