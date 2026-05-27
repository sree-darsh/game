interface CardProps {
  value: string;
  flipped: boolean;
  onClick: () => void;
}

function Card({ value, flipped, onClick }: CardProps) {
  return (
    <button
      onClick={onClick}
      className={`
        h-24 rounded-2xl text-3xl font-bold
        flex items-center justify-center
        transition-all duration-300 shadow-lg
        ${
          flipped
            ? "bg-white text-slate-900 scale-95"
            : "bg-blue-500 hover:bg-blue-600 hover:scale-105 text-white"
        }
      `}
    >
      {flipped ? value : "?"}
    </button>
  );
}

export default Card;
