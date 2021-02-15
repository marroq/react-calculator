import React from 'react';
import PropTypes from 'prop-types';
import Operator from '../Operator';

const CurrentOperation = ({ currentOperation, currentNumber }) => {
    return (
        <tr>
            <td>
                <Operator operator={'+'}/>
            </td>
            <td>
                <Operator operator={'-'}/>
            </td>
            <td>
                <Operator operator={'*'}/>
            </td>
            <td>
                <Operator operator={'/'}/>
            </td>
        </tr>
    )
};

CurrentOperation.propTypes = {
    currentOperation: PropTypes.arrayOf(PropTypes.shape).isRequired,
    currentNumber: PropTypes.string.isRequired,
}

export default CurrentOperation;
