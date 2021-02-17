import React from 'react';
import PropTypes from 'prop-types';

const Operator = ({ operator, displayOperator, setOperator }) => (
    <div>
        <button onClick={() => setOperator(displayOperator)}>
            {displayOperator}
        </button>
    </div>
);

Operator.propTypes = {
    operator: PropTypes.string.isRequired,
};

export default Operator;
