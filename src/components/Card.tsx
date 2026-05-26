interface CardProps {
  item: string;
  index: number;
  handleClick: (index: number) => void;
  isFlipped: boolean;
}

const Card = ({ item, index, handleClick, isFlipped }: CardProps) => {
  return (
    <button
      className="bg-gray-300 rounded w-full h-24 text-2xl font-bold"
      onClick={() => handleClick(index)}
    >
      {isFlipped ? item : "?"}
    </button>
  );
};

export default Card;
