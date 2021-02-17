import React from 'react';
import PropTypes from 'prop-types';
import CurrentOperation from '../CurrentOperation';
import Operate from '../Operate';

const OperationEditor = ({ currentNumber }) => {
    
    const[operate, setOperate] = React.useState(false);

    return (
        <div>
            <CurrentOperation
                currentOperation={currentOperation}
                currentNumber={currentNumber}
            />
            <Operate
                operate={operate}
                currentOperation={currentOperation}
                currentNumber={currentNumber}
            />
        </div>
    )
};

OperationEditor.propTypes = {
    currentNumber: PropTypes.string.isRequired,
};

export default OperationEditor;
