import React from 'react';
import PropTypes from 'prop-types';

const Number = ({inputNumber, displayNumber, onPushed}) => (
    <div>
        <button onClick={ () => onPushed(inputNumber + displayNumber)} >
            {displayNumber}
        </button>
    </div>
);

Number.propTypes = {
    inputNumber: PropTypes.number.isRequired,
};

export default Number;