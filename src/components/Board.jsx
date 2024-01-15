import { useState } from "react";
import Row from "./Row"

const Board = ({ gameOver, onGameOver, saveGameMemory, squares, gameWinner }) => {
    const [turn, setTurn] = useState('X');

    const [winSquares, setWinSquares] = useState([]);

    const checkGameWinner = (newSquares) => {
        const winSituations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        winSituations.forEach(element => {
            if (!newSquares[element[0]] || !newSquares[element[1]] || !newSquares[element[2]]) {
                return;
            }

            if (newSquares[element[0]] === newSquares[element[1]] && newSquares[element[1]] === newSquares[element[2]] && newSquares[element[0]] === newSquares[element[2]]) {
                setWinSquares([element[0], element[1], element[2]]);
                gameWinner(turn);
                onGameOver();
            }
        })
    }

    const checkGameDraw = (newSquares) => {
        for (let element of newSquares) {
            if (!element) {
                return;
            }
        }
        onGameOver();
    }

    const handleSquareClick = (id) => {
        
        if (squares[id] || gameOver) {
            return;
        }

        const newSquares = [...squares];
        newSquares.splice(id, 1, turn);
        saveGameMemory(newSquares);
        checkGameWinner(newSquares);
        checkGameDraw(newSquares);
        setTurn(turn === 'X' ? 'O' : 'X');
    }

    if (!gameOver && winSquares.length) {
        setWinSquares([]);
    }

    return (
        <div className="board">
            <Row
                squares={squares.slice(0, 3)}
                squareIds={[0, 1, 2]}
                onSquareClick={handleSquareClick}
                winSquares={winSquares}
            />
            <Row squares={squares.slice(3, 6)}
                squareIds={[3, 4, 5]}
                onSquareClick={handleSquareClick}
                winSquares={winSquares}
            />
            <Row
                squares={squares.slice(6, squares.length)}
                squareIds={[6, 7, 8]}
                onSquareClick={handleSquareClick}
                winSquares={winSquares}
            />
        </div>
    )
}

export default Board
