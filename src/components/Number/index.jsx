import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const Number = ({displayNumber, setCurrentNumber}) => (
    <div>
        <Button size="large" variant="contained" color="primary" onClick={() => setCurrentNumber(displayNumber)}>
            {displayNumber}
        </Button>
    </div>
);

Number.propTypes = {
    displayNumber: PropTypes.string.isRequired,
    setCurrentNumber: PropTypes.func.isRequired,
};

export default Number;
