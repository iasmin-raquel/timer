import React, {useState, useEffect} from 'react';
import { Timer } from './components/Timer.js';

function App() {

  const [timerDays, setTimerDays] = useState()
  const [timerHours, setTimerHours] = useState()
  const [timerMinutes, setTimerMinutes] = useState()
  const [timerSeconds, setTimerSeconds] = useState()

  

  const startTimer = () => {
    const countDownDate = new Date("May 31, 2023").getTime()

    let interval = setInterval(() => {
      const now = new Date.getTime()

      const distance = countDownDate - now
      
      const days = Math.floor(distance/(24*60*60*1000))
      const hours = Math.floor(distance % (24*60*60*1000)/(60*60*1000))
      const minutes = Math.floor(distance % (60*60*1000)/(60*1000))
      const seconds = Math.floor(distance % (60*1000)/(1000))

      if (distance < 0){
        clearInterval(interval.current)
      } else {
        setTimerDays(days)
        setTimerHours(hours)
        setTimerMinutes(minutes)
        setTimerSeconds(seconds)
      }
    })
  }

  useEffect(() => {
    startTimer()
  })

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
