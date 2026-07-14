import { useState } from "react"

const App = () => {

  const [count, setCount] = useState(0);
  const [turn, setTurn] = useState('X');
  const [winner, setWinner] = useState(null);
  const [board, setBoard] = useState(Array(9).fill(''));

  function reset() {
    setBoard(Array(9).fill(''));
    setTurn('X');
    setWinner(null);
    setCount(0);
  }

  function turnMark(index) {
    if (board[index] !== '') return;
    if (winner !== null) return;

    const newBoard = [...board];
    newBoard[index] = turn;
    if (turn === 'X') setTurn('0');
    else setTurn('X');

    setBoard(newBoard);
    setCount(count => count + 1);

    const result = winCheck(newBoard);

    if (result != 'NA') {
      setWinner(result);
    } else if (newBoard.every(cell => cell !== '')) {
      setWinner('DRAW');
    }
  }

  function winCheck(board) {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const [a, b, c] of winningCombinations) {
    if (
      board[a] !== "" &&
      board[a] === board[b] &&
      board[b] === board[c]
    ) {
      return board[a];
    }
  }

  return "NA";
}

  return (
    <div className="bg-linear-to-br from-slate-900 via-indigo-950 to-slate-900 flex flex-col justify-center items-center h-screen w-full">

      <h1 className="text-white text-5xl font-bold mb-3.5">Tic Tac Toe</h1>

      <div className="grid grid-cols-3">
        <button onClick={() => turnMark(0)} className="btn">{board[0]}</button>
        <button onClick={() => turnMark(1)} className="btn">{board[1]}</button>
        <button onClick={() => turnMark(2)} className="btn">{board[2]}</button>
        <button onClick={() => turnMark(3)} className="btn">{board[3]}</button>
        <button onClick={() => turnMark(4)} className="btn">{board[4]}</button>
        <button onClick={() => turnMark(5)} className="btn">{board[5]}</button>
        <button onClick={() => turnMark(6)} className="btn">{board[6]}</button>
        <button onClick={() => turnMark(7)} className="btn">{board[7]}</button>
        <button onClick={() => turnMark(8)} className="btn">{board[8]}</button>
      </div>
      
      <h1 className={`text-4xl px-5 py-3 bg-black text-white rounded-2xl ${(count === 9 || winner !== null) ? 'block' : 'hidden' }`}>{winner}</h1>

      <div className={`flex w-70 sm:w-100 justify-between mt-5 ${count === 9 ? "hidden" : ""}`}>
        <p className={`text-white text-2xl sm:text-4xl px-4 py-2 border border-white rounded-xl ${turn === 'X' ? 'play' : ""} ${winner === null ? 'block' : 'hidden'}`}>X's Turn</p>
        <p className={`text-white text-2xl sm:text-4xl px-4 py-2 border border-white rounded-xl ${turn === '0' ? 'play' : ""} ${winner === null ? 'block' : 'hidden'}`}>0's Turn</p>
      </div>

      <button onClick={reset} className="text-white text-xl px-4 py-3 mt-4 mb-4 rounded-2xl border hover:scale-105 active:scale-95 hover:bg-black hover:border-0 transition-transform">Restart Game</button>
    </div>
  )
}

export default App