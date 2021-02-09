import React from 'react';
import PropTypes from 'prop-types';

const SumOperator = ({ operands= [], onSum }) => (
    <div>
        <button onClick={() => onSum (operands.map(operand) +=operand ) }>
            {displayOperator}
        </button>
    </div>
);

Operator.propTypes = {
    operands: PropTypes.arrayOf(PropTypes.shape).isRequired,
    onSum: PropTypes.func.isRequired,
};

export default SumOperator;