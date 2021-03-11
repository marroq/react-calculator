import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const ClearDigit = ({ displayOperator, setDigit }) => (
    <div>
        <Button variant="outlined" onClick={() => setDigit()}>
            {displayOperator}
        </Button>
    </div>
);

ClearDigit.propTypes = {
    displayOperator: PropTypes.string.isRequired,
    setClear: PropTypes.func.isRequired,
};

export default ClearDigit;
