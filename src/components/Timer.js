  import React, { useState, useEffect } from 'react';
  import './Card.css';

  export const Timer = ({GetTimer}) => {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [timerRunning, setTimerRunning] = useState(false);

    useEffect(() => {
      let timer;
      if (timerRunning) {
        timer = setInterval(() => {
          setSeconds(prevSeconds => {
            if (prevSeconds === 59) {
              setMinutes(prevMinutes => prevMinutes + 1);
              return 0;
            }
            return prevSeconds + 1;
          });
        }, 1000);
      }
      return () => clearInterval(timer);
    }, [timerRunning]);

    function handleClick() {
      setTimerRunning(true);
    }

    function restartClick() {
      setMinutes(0);
      setSeconds(0);
      setTimerRunning(false);
    }
    function stopClick()
    {
       setTimerRunning(false)
       GetTimer(minutes,seconds)

    }

    return (
      <div>
        <div className='timer_container'>
          <h1>Timer</h1>
          <h1>
            {minutes < 10 ? '0' + minutes : minutes}:{seconds < 10 ? '0' + seconds : seconds}
          </h1>
        </div>
        <div className='button_container'>
          <div className='button' onClick={handleClick}>
            Start
          </div>
          <div className='button' onClick={restartClick}>
            Restart
          </div>
          <div className='button' onClick={stopClick}>
            Stop
          </div>
        </div>
      </div>
    );
  };
