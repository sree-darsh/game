import type { CardType } from "../types/game";
import Card from "./Card";

interface BoardProps {
  cards: CardType[];
  flippedCards: number[];
  matchedCards: string[];
  handleCardClick: (index: number) => void;
}

function Board({
  cards,
  flippedCards,
  matchedCards,
  handleCardClick,
}: BoardProps) {
  return (
    <div className="grid grid-cols-4 gap-4">
      {cards.map((card, index) => (
        <Card
          key={card.id}
          value={card.value}
          flipped={
            flippedCards.includes(index) || matchedCards.includes(card.value)
          }
          onClick={() => handleCardClick(index)}
        />
      ))}
    </div>
  );
}

export default Board;
