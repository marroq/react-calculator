import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const Operator = ({ operand, displayOperator, setOperation }) => (
    <Button size="large" variant="outlined" color="secondary" onClick={() => setOperation(operand, displayOperator)}>
        {displayOperator}
    </Button>
);

Operator.propTypes = {
    operand: PropTypes.string.isRequired,
    displayOperator: PropTypes.string.isRequired,
    setOperator: PropTypes.func.isRequired,
};

export default Operator;
