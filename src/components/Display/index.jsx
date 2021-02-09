import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ number, changeNumber }) => (
    <div>
        <input type="text" value={number} onChange={() => changeNumber(number) } /> 
    </div>
);

Display.propTypes = {
    number: PropTypes.number.isRequired,
    changeNumber: PropTypes.func.isRequired,
};

export default Display;