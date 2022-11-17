
import { useSelector } from "react-redux";
import { history, current, result } from '../../selectors/selections'

import './display.css'

function Display() {

    const input = useSelector(current);
    const output = useSelector(result);
    return (
        <div>
            <div className='in'>
                <input value={input} />
            </div>
            <div className='out'>
                {output}
            </div>
        </div>
    );

}

export default Display;