import React, { Fragment } from 'react'
import './timer.css';

export const Timer = (props) => {
  return (
    <Fragment>
      <section className='timer-container'>
        <section className='timer'>
          <div className='clock'>
            <section>
              <p>{props.timerDays}</p>
              <p>Days</p>
            </section>
            <span>:</span>
            <section>
              <p>{props.timerHours}</p>
              <p>Hours</p>
            </section>
            <span>:</span>
            <section>
              <p>{props.timerMinutes}</p>
              <p>Minutes</p>
            </section>
            <span>:</span>
            <section>
              <p>{props.timerSeconds}</p>
              <p>Seconds</p>
            </section>
          </div>
        </section>
      </section>
    </Fragment>
  )
}
