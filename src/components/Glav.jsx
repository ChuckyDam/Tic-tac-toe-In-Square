import React, { useState } from 'react';
import BigTable from './BigTable';
import './glav.scss';
import {calculateWinner} from "../logicGame.js";

const board = Array(9).fill(null);

const Glav = ()=>{
    // const [board, setBoard] = useState(Array(9).fill(null));
    const [miniBoard, setMiniBoard] = useState([
        [...board],
        [...board],
        [...board],
        [...board],
        [...board],
        [...board],
        [...board],
        [...board],
        [...board]
    ]);

    // const board = Array(9).fill(null);

    const [valueCell, setValueCell] = useState("X")

    function funClcik(ineTable, indCell, event){
        let bigTables = document.querySelectorAll(".Table");

        if(!bigTables[ineTable].classList.contains("active")) return;
        if(bigTables[ineTable].children[indCell].textContent !== "") return;

        event.target.innerHTML = "<p>"+valueCell+"</p>";

        handlerFillMiniTable(ineTable,indCell);
        handlerFillTable(ineTable);

        setValueCell(valueCell==="X"?"0":"X");
        console.log(valueCell);

        let h2 = document.querySelector("h2");
        h2.textContent = "Ходит " +  (valueCell==="X"?"0":"X");

        bigTables.forEach((items,ind) => {
            items.classList.remove("active");
            if (ind === indCell && board[indCell] === null && heIsEmpty(indCell)) items.classList.add("active");
        })

        if(board[indCell] !== null || !heIsEmpty(indCell)){
            bigTables.forEach((items,ind) => {
                if(board[ind] === null && heIsEmpty(ind))
                items.classList.add("active");
            })
        }

        if(calculateWinner(board)){
            h2.textContent = "Победил " + valueCell;
            bigTables.forEach((items) => {
                items.classList.remove("active");
            })
        }

    }

    function handlerFillMiniTable(ineTable,indCell){
        let miniBoardClone = [...miniBoard];
        miniBoardClone[ineTable][indCell] = valueCell;
        setMiniBoard(miniBoardClone);
    }

    function handlerFillTable(ineTable){
        // let boardClone = [...board];
        // console.log(ineTable);
        if(calculateWinner(miniBoard[ineTable]) ){
            board[ineTable] = valueCell;
            console.log(board);
        }
        // setBoard(boardClone);
    }

    function heIsEmpty(ind){
        let arr = Object.values(document.querySelector(".bigTable").children[ind].children);
        let back = false;
        arr.forEach(element => {
            if(element.innerHTML === "") back = true;
        });
        return back;

    }

    return(
        <div className='glav'>
            <h2>Ходит X</h2>
            <BigTable boolenTab={board} funClcik={funClcik}></BigTable>
            <button onClick={()=>{document.location.href = ""}}>Очистить поле</button>
        </div>
    )
}

export default Glav;