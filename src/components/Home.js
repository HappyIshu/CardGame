import React, { useEffect, useState } from 'react';
import './Card.css';
import Card from './Card';
import Confetti from './Confetti';

const Home = () => {
  const [numbers, setNumbers] = useState([1,2,3,4,5,1,2,3,4,5]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [celebrating, setCelebrating] = useState(false);

  useEffect(() => {
    const shuffleArray = (numbers) => {
      const shuffledNumbers = [...numbers];
      for (let i = shuffledNumbers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledNumbers[i], shuffledNumbers[j]] = [shuffledNumbers[j], shuffledNumbers[i]];
      }
      return shuffledNumbers;
    };
    setNumbers(shuffleArray(numbers).map(number => ({ number, isFlipped: false })));
  }, []);

  useEffect(() => {
    if (matchedCards.length === numbers.length / 2) {
      setCelebrating(true);
      setTimeout(() => setCelebrating(false), 9000); // Stop celebrating after 5 seconds
    }
  }, [matchedCards, numbers]);

  function handleClick(i) {
    if (flippedCards.length === 2) return;

    const newCards = [...numbers];
    newCards[i].isFlipped = true;
    setNumbers(newCards);

    const newFlippedCards = [...flippedCards, { ...newCards[i], index: i }];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      if (newFlippedCards[0].number === newFlippedCards[1].number) {
        setMatchedCards([...matchedCards, newFlippedCards[0].number]);
        setFlippedCards([]);
      } else {
        setTimeout(() => {
          const resetCards = newCards.map((card, i) =>
            newFlippedCards.some(flippedCard => flippedCard.index === i)
              ? { ...card, isFlipped: false }
              : card
          );
          setFlippedCards([]);
          setNumbers(resetCards);
        }, 1000);
      }
    }
  }

  return (
    <div className="card-container">
      {numbers.map((num, i) => (
        <Card key={i} number={num.number} isFlipped={num.isFlipped} onClick={() => handleClick(i)} />
      ))}
      {celebrating ?<Confetti/>:null}</div>
  );
}

export default Home;
