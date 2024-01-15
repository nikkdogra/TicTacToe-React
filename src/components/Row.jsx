import Sqaure from "./sqaure"

const Row = ({ squares, squareIds, onSquareClick, winSquares }) => {
    return (
        <div className="row">
            {
                squares.map((element, index) => <Sqaure
                    key={squareIds[index]}
                    id={squareIds[index]}
                    val={element}
                    onSquareClick={onSquareClick}
                    winSquares={winSquares}
                />)
            }
        </div>
    )
}

export default Row
