import { useState } from 'react';

export default function GameBoard({ onSelectSquare, board }) {

  // Old version
  // function handleSelectSquare(cellRow, cellCol) {
  //   setGameBoard(prevGameBoard => {
  //     const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
  //     if (updatedBoard[cellRow][cellCol] === null) {
  //       updatedBoard[cellRow][cellCol] = activePlayerSymbol;
  //     }
  //     return updatedBoard;
  //   });

  //   onSelectSquare();
  // }

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol !== null && true}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  )
}
