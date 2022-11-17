import "./keypad.css"
import Button from '../button/button.js'
import { filtersRedcer } from '../../reducer/index'

import { useDispatch } from "react-redux";


function Keypad() {
    const dispatch = useDispatch();
    const handleClickNumber = (num) => {
        dispatch(filtersRedcer.actions.ADD(num));
    }
    const handleClickChooses = (cho) => {
        dispatch(filtersRedcer.actions.ADD_CHO(cho));
    }
    const handleClickEquals = (equals) => {
        dispatch(filtersRedcer.actions.EQUALS(equals))
    }
    const handleClickClears = (clears) => {
        dispatch(filtersRedcer.actions.CLEARS(clears))
    }
    const handleClickDeletes = (deletes) => {
        dispatch(filtersRedcer.actions.DELETE(deletes))
    }


    return (
        <div className="keypad">
            <div className="btn-1">
                <Button button={"C"} id="w" onClick={() => handleClickDeletes("C")} />
                <Button button={"AC"} id="w" onClick={() => handleClickClears("AC")} />
            </div>
            <div className="btn-1">
                <Button button={7} value={7} onClick={() => handleClickNumber(7)} />
                <Button button={8} value={8} onClick={() => handleClickNumber(8)} />
                <Button button={9} value={9} onClick={() => handleClickNumber(9)} />
                <Button button={"x"} value={"x"} onClick={() => handleClickChooses("x")} />
            </div>
            <div className="btn-1">
                <Button button={4} value={4} onClick={() => handleClickNumber(4)} />
                <Button button={5} value={5} onClick={() => handleClickNumber(5)} />
                <Button button={6} value={6} onClick={() => handleClickNumber(6)} />
                <Button button={"/"} value={"/"} onClick={() => handleClickChooses("/")} />
            </div>
            <div className="btn-1">
                <Button button={1} value={1} onClick={() => handleClickNumber(1)} />
                <Button button={2} value={2} onClick={() => handleClickNumber(2)} />
                <Button button={3} value={3} onClick={() => handleClickNumber(3)} />
                <Button button={"-"} onClick={() => handleClickChooses("-")} />
            </div>

            <div className="btn-1">
                <Button button={","} onClick={() => handleClickNumber(".")} />
                <Button button={0} value={0} onClick={() => handleClickNumber(0)} />
                <Button button={"="} onClick={() => handleClickEquals("=")} />
                <Button button={"+"} onClick={() => handleClickChooses("+")} />
            </div>

        </div>
    );
}
export default Keypad;