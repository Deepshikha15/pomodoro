import React, { useState, useEffect } from 'react'
import './Pomo.css'
import Swal from 'sweetalert2'

function Pomo() {
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(4)
    const [displayMessage, setDisplayMessage] = useState(false)
    useEffect(() => {
        let timerId = setInterval(() => {
            if (seconds === 0) {
                if (minutes != 0) {
                    setSeconds(59)
                    setMinutes(minutes - 1)
                } else {
                    let min = displayMessage ? 24 : 1
                    let seconds = 59
                    setSeconds(seconds)
                    setMinutes(min)
                    setDisplayMessage(!displayMessage);
                    // alert("BreakStarts 🥳 🥳 🥳");
                    Swal.fire(
                        'Good job!',
                        'Your BreakTime Starts 🥳 🥳 🥳!',
                        'success'
                    )

                }
            } else {
                setSeconds(seconds - 1)
            }
            clearInterval(timerId)
        }, 1000);
    }, [seconds])


    let minute = minutes < 10 ? `0${minutes}` : minutes
    let second = seconds < 10 ? `0${seconds}` : seconds
    return (<div >
        <header className="header">
            <h1 className="title">Pomodoro</h1>
        </header>
        <div className="wrap">
            <h1 className="time">{displayMessage && <h3 className="time" >Breaktime 🥳</h3>
            }
            </h1>
            <div className='anwrap'>
                <div className='countdown-wrapper'>
                    <div className='time-section'>
                        <div className='time'>{minute}</div>
                        <small className="time-text">Minutes</small>
                    </div>
                    <div className='time-section'>
                        <div className='time'>:</div>
                    </div>
                    <div className='time-section'>
                        <div className='time'>{second}</div>
                        <small className="time-text">Seconds</small>
                    </div>
                </div>
            </div>
        </div>
    </div>

    )

}
export default Pomo;