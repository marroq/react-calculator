import React from 'react';
import PropTypes from 'prop-types';

const Number = ({inputNumber = 0}) => (
    <div>
        <button>{inputNumber}</button>
    </div>
);

Number.propTypes = {
    inputNumber: PropTypes.number.isRequired,
};

export default Number;