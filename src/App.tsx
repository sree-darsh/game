import { useState } from "react";
import Card from "./components/Card";

interface CardType {
  id: number;
  value: string;
}

const data = ["A", "B", "C", "D", "E", "F", "G", "H"];

const createShuffledCards = (): CardType[] => {
  return [...data, ...data]
    .map((value, index) => ({
      id: index,
      value: value,
    }))
    .sort(() => Math.random() - 0.5);
};

const App = () => {
  const [cards, setCards] = useState<CardType[]>(() => createShuffledCards());

  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchedCards, setMatchedCards] = useState<string[]>([]);
  const [moves, setMoves] = useState(0);

  const handleClick = (index: number) => {
    if (flippedCards.length === 2) return;
    if (flippedCards.includes(index)) return;

    const clickedCard = cards[index];

    if (matchedCards.includes(clickedCard.value)) return;

    const newFlippedCards = [...flippedCards, index];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      setMoves((prev) => prev + 1);

      const firstCard = cards[newFlippedCards[0]];
      const secondCard = cards[newFlippedCards[1]];

      if (firstCard.value === secondCard.value) {
        setMatchedCards((prev) => [...prev, firstCard.value]);
        setFlippedCards([]);
      } else {
        setTimeout(() => {
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  const resetGame = () => {
    setCards(createShuffledCards());
    setFlippedCards([]);
    setMatchedCards([]);
    setMoves(0);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="text-2xl font-bold">Memory Game</h1>

      <p>Moves: {moves}</p>

      {matchedCards.length === data.length && (
        <p className="text-green-600 font-semibold">You won!</p>
      )}

      <button
        onClick={resetGame}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Reset
      </button>

      <div className="grid grid-cols-4 gap-4 w-[400px]">
        {cards.map((card, index) => (
          <Card
            key={card.id}
            item={card.value}
            index={index}
            handleClick={handleClick}
            isFlipped={
              flippedCards.includes(index) || matchedCards.includes(card.value)
            }
          />
        ))}
      </div>
    </div>
  );
};

export default App;
