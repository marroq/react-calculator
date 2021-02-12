import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ number }) => (
    <div>
        <input type="text" readOnly value={number} /> 
    </div>
);

Display.propTypes = {
    number: PropTypes.number.isRequired,
};

export default Display;
