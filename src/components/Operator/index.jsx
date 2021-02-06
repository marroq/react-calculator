import React from 'react';
import PropTypes from 'prop-types';

const Operator = ({ operand }) => (
    <div>
        <button>
            {operand}
        </button>
    </div>
);

Operator.propTypes = {
    inputNumber: PropTypes.string.isRequired,
};

export default Operator;