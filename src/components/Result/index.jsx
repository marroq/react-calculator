import React from 'react';
import PropTypes from 'prop-types';

const Result = ({ operate }) => (
    <div>
        <button>
            =
        </button>
    </div>
);

Result.propTypes = {
    operate: PropTypes.bool.isRequired,
};

export default Result;
