import React, {useEffect, useState} from "react";
import {Button, ProgressBar} from "react-bootstrap";


function Timer({initialSeconds}) {
    const [seconds, setSeconds] = useState(initialSeconds);
    const [active, setActive] = useState(false);
    const time = new Date(seconds * 1000).toISOString().substring(14, 19);

    let myInterval;
    useEffect(() => {
        if (active) myInterval = setInterval(countdown, 1000);
        else clearInterval(myInterval);
        return () => clearInterval(myInterval);
    }, [active])

    function countdown() {
        setSeconds((seconds) => {
            if (seconds < 1) {
                setActive(false);
                return 0;
            }
            return seconds-1;
        });
    }

    const clickHandler = () => {
        setActive(ps => !ps);
    }

    const resetHandler = () => {
        setSeconds(initialSeconds);
        setActive(false);
    }

    return <div>
        <h2>{time}</h2>
        <div>
            <ProgressBar now={/*(initialSeconds/initialValue)*100*/100} variant="success"
                         className="w-50 m-5 border border-dark"/>
        </div>
        <Button onClick={clickHandler}
                size="lg"
                variant="outline-primary">Start/Pause</Button>
        <Button onClick={resetHandler}
                size="lg"
                variant="outline-secondary">Reset</Button>
    </div>
}

export default Timer;