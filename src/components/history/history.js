import './history.css'

import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { history, showHistorySelector } from '../../selectors/selections'
import { filtersRedcer } from '../../reducer';


function History() {
    const showIndex = useSelector(showHistorySelector)
    const dispath = useDispatch()
    const showHistory = 'show';
    const hideHistory = showIndex ? 'hide' : '';
    const historyList = useSelector(history);
    const handleClickHide = () => {
        dispath(filtersRedcer.actions.SHOW_HISTORY())
    }
    return (
        <div className={`${showHistory} ${hideHistory}`}>
            <div className="title-history" onClick={handleClickHide}>HISTORY</div>
            <div className="body-history">
                {
                    historyList.map(data => {
                        return (
                            <div className='body-data'>
                                <p>{data}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default History;