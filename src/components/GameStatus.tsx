interface GameStatusProps {
  message: string;
  won: boolean;
}

function GameStatus({ message, won }: GameStatusProps) {
  return (
    <div className="mb-5 text-center">
      {message && <p className="text-white font-medium mb-2">{message}</p>}

      {won && (
        <div className="bg-green-500 text-white py-3 rounded-xl font-semibold">
          You completed the game!
        </div>
      )}
    </div>
  );
}

export default GameStatus;
