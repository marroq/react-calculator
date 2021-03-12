import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

const Display = ({ number }) => (
    <TextField id="outlined-basic" variant="outlined" readOnly value={number} /> 
);

Display.propTypes = {
    number: PropTypes.string.isRequired,
};

export default Display;
