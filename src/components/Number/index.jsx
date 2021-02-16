import React from 'react';
import PropTypes from 'prop-types';

const Number = ({displayNumber, currentNumber, setCurrentNumber}) => (
    <div>
        <button onClick={() => setCurrentNumber(currentNumber + displayNumber)}>
            {displayNumber}
        </button>
    </div>
);

Number.propTypes = {
    displayNumber: PropTypes.string.isRequired,
    currentNumber: PropTypes.string.isRequired,
    setCurrentNumber: PropTypes.func.isRequired,
};

export default Number;
