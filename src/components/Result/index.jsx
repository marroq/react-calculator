import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const Result = ({ currentNumber, currentOperations, setResult }) => (
    <Button size="large" variant="outlined" color="primary" onClick={() => setResult(currentOperations, currentNumber, 2)}>
        =
    </Button>
);

Result.propTypes = {
    currentNumber: PropTypes.string.isRequired,
    currentOperations: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    setResult: PropTypes.func.isRequired,
};

export default Result;
