import Board from "./components/Board";
import GameStatus from "./components/GameStatus";
import Header from "./components/Header";
import useMemoryGame from "./hooks/useMemoryGame";

function App() {
  const {
    cards,
    flippedCards,
    matchedCards,
    moves,
    message,
    handleCardClick,
    resetGame,
    won,
  } = useMemoryGame();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-6">
      <div className="w-full max-w-lg bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl shadow-2xl p-6">
        <Header moves={moves} resetGame={resetGame} />

        <GameStatus message={message} won={won} />

        <Board
          cards={cards}
          flippedCards={flippedCards}
          matchedCards={matchedCards}
          handleCardClick={handleCardClick}
        />
      </div>
    </div>
  );
}

export default App;
