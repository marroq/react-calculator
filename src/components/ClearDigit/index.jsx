import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const ClearDigit = ({ displayOperator, setDigit }) => (
    <Button variant="outlined" onClick={() => setDigit()}>
        {displayOperator}
    </Button>
);

ClearDigit.propTypes = {
    displayOperator: PropTypes.string.isRequired,
    setDigit: PropTypes.func.isRequired,
};

export default ClearDigit;
