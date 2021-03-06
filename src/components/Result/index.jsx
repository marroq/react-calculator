import React from 'react';
import PropTypes from 'prop-types';

const Result = ({ currentNumber, currentOperations, setResult }) => (
    <div>
        <button onClick={() => setResult(currentOperations, currentNumber, 2)}>
            =
        </button>
    </div>
);

Result.propTypes = {
    currentNumber: PropTypes.string.isRequired,
    currentOperations: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    setResult: PropTypes.func.isRequired,
};

export default Result;
