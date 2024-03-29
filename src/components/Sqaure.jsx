const Sqaure = ({ id, val, onSquareClick, winSquares }) => {
    return (
        <div className="square"
            style={
                {
                    color: val === 'X' ? '#04f956' : '#9df702', backgroundColor: winSquares.includes(id) ? '#fff' : '#353434'
                }
            }
            onClick={() => onSquareClick(id)}>
            {val}
        </div>
    )
}

export default Sqaure
