import React from 'react';
import PropTypes from 'prop-types';

const Result = () => (
    <div>
        <button>
            =
        </button>
    </div>
);

Result.propTypes = {
    result: PropTypes.string.isRequired,
};

export default Result;
