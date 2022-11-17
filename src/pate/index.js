import { Component } from 'react';
import Display from '../components/display/display';
import History from '../components/history/history';
import Keypad from '../components/keypad/keypad';
import './calculator.css'

class Calculator extends Component {
    render() {
        return (
            <>
                <div className='body'>
                    <div>
                        <History />
                    </div>
                    <div className='border'>
                        <div className='name'>
                            <h1>Calculator ThanhDo</h1>
                        </div>
                        <div className='output'>
                            <Display />
                        </div>
                        <div className="input">
                            <Keypad />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}


export default Calculator;