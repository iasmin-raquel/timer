import React, {useState} from 'react';
import { Timer } from './components/Timer.js';

function App() {

  const [timerDays, setTimeDays] = useState()
  const [timerHours, setTimeHours] = useState()
  const [timerMinutes, setTimeMinutes] = useState()
  const [timerSeconds, setTimeSeconds] = useState()

  return (
    <Timer 
    timerDays={timerDays} 
    timerHours={timerHours}
    timerMinutes={timerMinutes}
    timerSeconds={timerSeconds}
    />
  );
}

export default App;
