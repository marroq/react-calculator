import React from 'react';
import PropTypes from 'prop-types';

const Number = ({inputNumber = 0, onPushed}) => (
    <div>
        <button onClick={() => onPushed(inputNumber) }>
            {inputNumber}
        </button>
    </div>
);

Number.propTypes = {
    inputNumber: PropTypes.number.isRequired,
};

export default Number;