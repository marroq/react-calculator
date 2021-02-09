import React from 'react';
import PropTypes from 'prop-types';

const SumOperator = ({ firstOperand, secondOperand, onSum }) => (
    <div>
        <button onClick={ () => onSum(firstOperand + secondOperand) }>
            +
        </button>
    </div>
);

SumOperator.propTypes = {
    operands: PropTypes.arrayOf(PropTypes.shape).isRequired,
    onSum: PropTypes.func.isRequired,
};

export default SumOperator;