import React from 'react';
import PropTypes from 'prop-types';

const Number = ({displayNumber}) => (
    <div>
        <button>
            {displayNumber}
        </button>
    </div>
);

Number.propTypes = {
    displayNumber: PropTypes.string.isRequired,
};

export default Number;
