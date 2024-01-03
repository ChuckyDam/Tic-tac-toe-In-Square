import React from 'react';
import Board from './Board';
import './bigTable.scss';

const BigTable = ({boolenTab, funClcik})=>{
    return(
        <div className='bigTable'>
            {
                boolenTab.map((el, ind) => {
                    return (
                        <Board key={ind} boolenTable={boolenTab} funClcik={(indCell, event)=>funClcik(ind, indCell, event)}></Board>
                    )
                })
            }
        </div>
    )
}

export default BigTable;


