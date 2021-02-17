import React from 'react';
import PropTypes from 'prop-types';
import Operator from '../Operator';

const CurrentOperation = ({ currentOperation, currentNumber, setCurrentNumber, setCurrentOperation }) => {
    const[operator, setOperator] = React.useState('');
    
    updateCurrentOperation = () => {
        setCurrentOperation([...currentOperation, currentNumber, operator]);
    };

    return (
        <tr>
            <td>
                <Operator 
                    displayOperator={'+'}
                    setOperator={setOperator}
                  
                />
            </td>
            <td>
                <Operator
                    displayOperator={'-'}
                    setOperator={setOperator}
                />
            </td>
            <td>
                <Operator
                    displayOperator={'*'}
                    setOperator={setOperator}
                />
            </td>
            <td>
                <Operator
                    displayOperator={'/'}
                    setOperator={setOperator}
                />
            </td>
        </tr>
    )
};

CurrentOperation.propTypes = {
    currentOperation: PropTypes.arrayOf(PropTypes.shape).isRequired,
    currentNumber: PropTypes.string.isRequired,
    setCurrentOperation: PropTypes.func.isRequired,
}

export default CurrentOperation;
