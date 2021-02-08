import React from 'react';
import PropTypes from 'prop-types';

const Number = ({inputNumber, displayNumber, setDisplay}) => (
    <div>
        <button onClick={ () => setDisplay(inputNumber + displayNumber)}>
            {displayNumber}
        </button>
    </div>
);

Number.propTypes = {
    inputNumber: PropTypes.string.isRequired,
    displayNumber: PropTypes.string.isRequired,
    setDisplay: PropTypes.func.isRequired,
};

export default Number;