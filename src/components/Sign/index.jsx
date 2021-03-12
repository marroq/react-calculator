import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const Sign = ({ setSign }) => (
    <Button size="large" variant="outlined" color="secondary" onClick={() => setSign()}>
        +/-
    </Button>
);

Sign.propTypes = {
    setSign: PropTypes.func.isRequired,
};

export default Sign;
