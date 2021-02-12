import React from 'react';
import Display from '../Display';
import Number from '../Number';
import Operator from '../Operator';
import Result from '../Result';

const Calculator = () => (
    <div align="center">
        <Display
            number={5}
        />
        <table>
            <tr>
                <td>
                    <Number displayNumber={7}/>
                </td>
                <td>
                    <Number displayNumber={8}/>
                </td>
                <td>
                    <Number displayNumber={9}/>
                </td>
            </tr>
            <tr>
                <td>
                    <Number displayNumber={4}/>
                </td>
                <td>
                    <Number displayNumber={5}/>
                </td>
                <td>
                    <Number displayNumber={6}/>
                </td>
            </tr>
            <tr>
                <td>
                    <Number displayNumber={1}/>
                </td>
                <td>
                    <Number displayNumber={2}/>
                </td>
                <td>
                    <Number displayNumber={3}/>
                </td>
            </tr>
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
            <tr>
                <td></td>
                <td><Result/></td>
                <td></td>
            </tr>
        </table>
    </div>
);

export default Calculator;
