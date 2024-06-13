import React from 'react';

const Score = ({ minutes, seconds }) => {
  let points = minutes * 100 + seconds * 10;
  return (
    <div>
      <h1>Your Score: {points}</h1>
    </div>
  );
};

export default Score;
