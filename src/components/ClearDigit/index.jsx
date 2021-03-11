import React from 'react';
import PropTypes from 'prop-types';

const ClearDigit = ({ displayOperator, setDigit }) => (
    <div>
        <button onClick={() => setDigit()}>
            {displayOperator}
        </button>
    </div>
);

ClearDigit.propTypes = {
    displayOperator: PropTypes.string.isRequired,
    setClear: PropTypes.func.isRequired,
};

export default ClearDigit;
