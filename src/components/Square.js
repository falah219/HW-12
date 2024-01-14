export const Square = ({ value, onSquareClick }) => {
    return (
        <button className="square w-44 h-44 border-solid border-2 border-gray-500 text-lg" onClick={onSquareClick}>
            <p className="text-8xl">{value}</p>
        </button>
    );
}
