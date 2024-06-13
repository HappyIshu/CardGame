import React,{useState,useEffect} from 'react'
import ReactConfetti from 'react-confetti'
const Confetti = () => {
  return (
    <div>
        <h2>Congratulations!</h2>
        <ReactConfetti>
            width={100}
            height={100}
        </ReactConfetti>
    </div>
  )
}

export default Confetti