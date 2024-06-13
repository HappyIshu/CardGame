import React from 'react'

const Card = ({number,isFlipped,onClick}) => {
    const cardClassName=`card${isFlipped?'':'flipped'}`;
    
// changes
  return (
    <div className={cardClassName} onClick={onClick}>
        <h1>{number}</h1>
    </div>
  )
}

export default Card