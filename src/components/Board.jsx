import React from 'react';
import Cell from './Cell';
import './board.scss';

// Отстойный вариант
// const Board = ()=>{
//     let arr = [];
//     for(let i = 0; i < 9; i++){
//         arr.push(2);          
//     }
//     return(
//         <div className='Table active'>
//             {
//                 arr.map(el => {
//                     return(
//                         <Cell value={"x"}></Cell>
//                     )
//                 })
//             }
//         </div>
//     )
// }

// Вариант лучше

const Board = ({boolenTable, funClcik})=>{
    return(
        <div className='Table active'>
            {
                boolenTable.map((el,ind) => {
                    return(
                            <Cell key={ind} funClcik={(event)=>funClcik(ind, event)}></Cell>
                    )
                })
            }
        </div>
    )
}

export default Board;