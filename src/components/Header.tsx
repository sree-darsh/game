interface HeaderProps {
  moves: number;
  resetGame: () => void;
}

function Header({ moves, resetGame }: HeaderProps) {
  return (
    <div className="flex items-center justify-between mb-6">
      <div>
        <h1 className="text-3xl font-bold text-white">Memory Game</h1>
        <p className="text-slate-300 mt-1">Moves: {moves}</p>
      </div>

      <button
        onClick={resetGame}
        className="bg-blue-500 hover:bg-blue-600 transition text-white px-4 py-2 rounded-xl font-medium"
      >
        New Game
      </button>
    </div>
  );
}

export default Header;
