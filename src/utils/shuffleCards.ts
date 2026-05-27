import type { CardType } from "../types/game";

const values = ["A", "B", "C", "D", "E", "F", "G", "H"];

export const shuffleCards = (): CardType[] => {
  return [...values, ...values]
    .sort(() => Math.random() - 0.5)
    .map((item, index) => ({
      id: index,
      value: item,
    }));
};
