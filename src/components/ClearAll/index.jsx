import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const ClearAll = ({ displayOperator, setClear }) => (
    <div>
        <Button variant="outlined" onClick={() => setClear()}>
            {displayOperator}
        </Button>
    </div>
);

ClearAll.propTypes = {
    displayOperator: PropTypes.string.isRequired,
    setClear: PropTypes.func.isRequired,
};

export default ClearAll;
