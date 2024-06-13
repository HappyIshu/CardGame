// // App.js
// import React, { useEffect, useState } from 'react';
// import Card from './Card';
// import './Card.css';

// const App = () => {
//     const [cards, setCards] = useState([]);
//     const [flippedCards, setFlippedCards] = useState([]);
//     const [matchedCards, setMatchedCards] = useState([]);

//     useEffect(() => {
//         const numbers = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
//         const shuffleArray = (array) => {
//             for (let i = array.length - 1; i > 0; i--) {
//                 const j = Math.floor(Math.random() * (i + 1));
//                 [array[i], array[j]] = [array[j], array[i]];
//             }
//             return array;
//         };
//         setCards(shuffleArray(numbers).map(number => ({ number, isFlipped: false })));
//     }, []);

//     const handleCardClick = (index) => {
//         if (flippedCards.length === 2) {
//             return;
//         }

//         const newCards = [...cards];
//         newCards[index].isFlipped = true;
//         setCards(newCards);

//         const newFlippedCards = [...flippedCards, { ...newCards[index], index }];
//         setFlippedCards(newFlippedCards);

//         if (newFlippedCards.length === 2) {
//             if (newFlippedCards[0].number === newFlippedCards[1].number) {
//                 setMatchedCards([...matchedCards, newFlippedCards[0].number]);
//                 setFlippedCards([]);
//             } else {
//                 setTimeout(() => {
//                     const resetCards = newCards.map((card, i) =>
//                         newFlippedCards.some(flippedCard => flippedCard.index === i)
//                             ? { ...card, isFlipped: false }
//                             : card
//                     );
//                     setCards(resetCards);
//                     setFlippedCards([]);
//                 }, 1000);
//             }
//         }
//     };

//     return (
//         <div className="card-container">
//             {cards.map((card, index) => (
//                 <Card
//                     key={index}
//                     number={card.number}
//                     isFlipped={card.isFlipped || matchedCards.includes(card.number)}
//                     onClick={() => handleCardClick(index)}
//                 />
//             ))}
//         </div>
//     );
// };

// export default App;