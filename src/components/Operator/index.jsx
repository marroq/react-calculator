import React from 'react';
import PropTypes from 'prop-types';

const Operator = ({ operand, displayOperator, setOperation }) => (
    <div>
        <button onClick={() => setOperation(operand, displayOperator)}>
            {displayOperator}
        </button>
    </div>
);

Operator.propTypes = {
    operand: PropTypes.string.isRequired,
    displayOperator: PropTypes.string.isRequired,
    setOperator: PropTypes.func.isRequired,
};

export default Operator;
