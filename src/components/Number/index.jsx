import React from 'react';
import PropTypes from 'prop-types';

const Number = ({displayNumber, currentNumber}) => (
    <div>
        <button>
            {displayNumber}
        </button>
    </div>
);

Number.propTypes = {
    displayNumber: PropTypes.string.isRequired,
    currentNumber: PropTypes.string.isRequired,
};

export default Number;
