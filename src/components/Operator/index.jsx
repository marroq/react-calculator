import React from 'react';
import PropTypes from 'prop-types';

const Operator = ({ displayOperator, operand, operands, setOperands, setNumber }) => (
    <div>
        <button onClick={() => {
            setOperands([...operands, operand, displayOperator]);
            setNumber(operand = '');
        }}>
        {displayOperator}
        </button>
    </div>
);

Operator.propTypes = {
    displayOperator: PropTypes.string.isRequired,
    operand: PropTypes.string.isRequired,
    operands: PropTypes.arrayOf(PropTypes.shape).isRequired,
    setOperands: PropTypes.func.isRequired,
    setNumber: PropTypes.func.isRequired,
};

export default Operator;