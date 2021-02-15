import React from 'react';
import PropTypes from 'prop-types';
import Result from '../Result';

const Operate = ({ operate, currentOperation, currentNumber }) => {
    
    return(
        <Result
            operate={operate}
        />
    )
};

Operate.propTypes = {
    operate: PropTypes.bool.isRequired,
    currentOperation: PropTypes.arrayOf(PropTypes.shape).isRequired,
    currentNumber: PropTypes.string.isRequired,
}

export default Operate;
