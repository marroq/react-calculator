import React from 'react';
import PropTypes from 'prop-types';

const Number = ({displayNumber, setCurrentNumber}) => (
    <div>
        <button onClick={() => setCurrentNumber(displayNumber)}>
            {displayNumber}
        </button>
    </div>
);

Number.propTypes = {
    displayNumber: PropTypes.string.isRequired,
    setCurrentNumber: PropTypes.func.isRequired,
};

export default Number;
