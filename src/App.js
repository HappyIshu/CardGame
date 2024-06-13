import { useState } from "react";
import Home from "./components/Home";
import { Timer } from "./components/Timer";
import Score from "./components/Score";


function App() {
  const [score,setScore]=useState(false);
  const [time,setTime]=useState(
    {
      minutes:0,
      seconds:0
    }
  )
  function GetTimer(minutes,seconds)
  {
   
    setTime({
      minutes: minutes,
      seconds: seconds
    });
    setScore(true)
  }

  return (
    <div className="App">

       <Home/>
       <div className="button-container" >
       <div><Timer  GetTimer={GetTimer} /></div>
       <div> {score?<Score minutes={time.minutes} seconds={time.seconds}/>:""}</div>
       </div>
      
    </div>
  );
}

export default App;
