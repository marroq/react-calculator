import React from 'react';
import PropTypes from 'prop-types';

const Result = ({ setResult }) => (
    <div>
        <button onClick={() => setResult()}>
            =
        </button>
    </div>
);

Result.propTypes = {
    setResult: PropTypes.func.isRequired,
};

export default Result;
