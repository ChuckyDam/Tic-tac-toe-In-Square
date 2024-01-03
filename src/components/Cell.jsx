import React from 'react';
import './cell.scss';

const Cell = (obj)=>{
    return(
        <div onClick={obj.funClcik} className='cell'></div>
    )
}

export default Cell;


// function(e){
//     let bigTables = document.querySelectorAll(".Table");
//     console.log(obj.ind);

//     if(!bigTables[obj.indTable].classList.contains("active")) {
//         e.stopPropagation();
//         return;
//     };

//     if(e.target.textContent === ""){ 
//         e.target.innerHTML = "<p>"+obj.value+"</p>"

//         // smallArrWin[index][i] = order; 
//     }else {
//         e.stopPropagation();
//         return
//     };

//     bigTables.forEach((items) => { 
//         items.classList.remove("active");
//     })

//     if(obj.click(obj.ind)){
//         bigTables.forEach((items,ind) => {
//             if (!obj.click(ind)){
//                 items.classList.add("active");
//             }
//         })
//     }else bigTables[obj.ind].classList.add("active");

// }