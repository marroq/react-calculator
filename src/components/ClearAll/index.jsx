import React from 'react';
import PropTypes from 'prop-types';

const ClearAll = ({ displayOperator, setClear }) => (
    <div>
        <button onClick={() => setClear()}>
            {displayOperator}
        </button>
    </div>
);

ClearAll.propTypes = {
    displayOperator: PropTypes.string.isRequired,
    setClear: PropTypes.func.isRequired,
};

export default ClearAll;
