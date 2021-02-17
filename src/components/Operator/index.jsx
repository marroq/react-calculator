import React from 'react';
import PropTypes from 'prop-types';

const Operator = ({ displayOperator, setOperator }) => (
    <div>
        <button onClick={() => setOperator(displayOperator)}>
            {displayOperator}
        </button>
    </div>
);

Operator.propTypes = {
    displayOperator: PropTypes.string.isRequired,
    setOperator: PropTypes.func.isRequired,
};

export default Operator;
