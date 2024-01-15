import { useState } from 'react';
import './App.css';
import Board from './components/Board';
import Button from './components/Button';

function App() {
  const [gameOver, setGameOver] = useState(false);

  const [gameMemory, setGameMemory] = useState([new Array(9).fill(null)]);

  const [winner, setWinner] = useState(null);

  const handleBtnClick = () => {
    if (gameOver) {
      setGameMemory([gameMemory[0]]);

      setGameOver(false);

      setWinner(null);

    } else {

      if (gameMemory.length > 1) {
        setGameMemory(gameMemory.slice(0, gameMemory.length - 1));
      }

    }
  }

  return (
    <div className='container'>
      {
        gameOver
          ?
          <h1 className='heading'>
            {
              winner
                ?
                'Congratulations: '
                :
                'Game Over: '
            }
            <span>
              {
                winner
                  ?
                  winner
                  :
                  ' Draw'
              }
            </span>
            {winner && ' Wins'}
          </h1>
          :
          <h1 className='heading'>Tic Tac Toe Game In <span>React</span></h1>
      }

      <Board
        gameOver={gameOver}
        onGameOver={() => setGameOver(true)}
        saveGameMemory={(squares) => setGameMemory([...gameMemory, squares])}
        squares={gameMemory[gameMemory.length - 1]}
        gameWinner={(winner) => setWinner(winner)}
      />

      <div className='btn-container'>
        <Button onBtnClick={handleBtnClick}>
          {
            gameOver
              ?
              'Reset'
              :
              'Back'
          }
        </Button>
      </div>
    </div>
  )
}
export default App;