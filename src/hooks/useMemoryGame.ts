import { useState } from "react";
import { shuffleCards } from "../utils/shuffleCards";
import type { CardType } from "../types/game";

function useMemoryGame() {
  const [cards, setCards] = useState<CardType[]>(shuffleCards());
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchedCards, setMatchedCards] = useState<string[]>([]);
  const [moves, setMoves] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [message, setMessage] = useState("");

  const handleCardClick = (index: number) => {
    if (disabled) return;
    if (flippedCards.includes(index)) return;

    const currentCard = cards[index];

    if (matchedCards.includes(currentCard.value)) return;

    const updatedFlipped = [...flippedCards, index];

    setFlippedCards(updatedFlipped);

    if (updatedFlipped.length === 2) {
      setDisabled(true);
      setMoves((prev) => prev + 1);

      const firstCard = cards[updatedFlipped[0]];
      const secondCard = cards[updatedFlipped[1]];

      if (firstCard.value === secondCard.value) {
        setMessage("Match found");

        setMatchedCards((prev) => [...prev, firstCard.value]);

        setTimeout(() => {
          setFlippedCards([]);
          setDisabled(false);
        }, 500);
      } else {
        setMessage("Not a match");

        setTimeout(() => {
          setFlippedCards([]);
          setDisabled(false);
        }, 1000);
      }
    }
  };

  const resetGame = () => {
    setCards(shuffleCards());
    setFlippedCards([]);
    setMatchedCards([]);
    setMoves(0);
    setMessage("");
  };

  return {
    cards,
    flippedCards,
    matchedCards,
    moves,
    message,
    handleCardClick,
    resetGame,
    won: matchedCards.length === 8,
  };
}

export default useMemoryGame;
