import React from 'react';
import PropTypes from 'prop-types';

const Operator = ({ operator }) => (
    <div>
        <button>
            {operator}
        </button>
    </div>
);

Operator.propTypes = {
    operator: PropTypes.string.isRequired,
};

export default Operator;
