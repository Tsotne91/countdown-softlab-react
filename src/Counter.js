import React, {useEffect, useState} from "react";
import {Button} from "react-bootstrap"
//import './Counter.css';

function Counter (){
        const [seconds, setSeconds] = useState(120);
        let [active, setActive] = useState(false);
        let initialValue = new Date(seconds * 1000).toISOString().substr(14, 5);

        let myInterval;
        useEffect(() => {
            // if (seconds===0) {
            //     setActive(active=false);
            //     return setSeconds(0);
            // }

            if (active){
                myInterval = setInterval(countdown, 1000);
                setActive(active=true);
            }
            else {
                clearInterval(myInterval);
            }
            return () => clearInterval(myInterval);
       }, [active])

        function countdown (){
            return setSeconds((seconds)=>seconds-1);
        }

        const clickHandler = () => {
            setActive( ps => !ps);
        }

        const resetHandler = () => {
            setSeconds(120);
            setActive(false);
        }

        return <div>
                <h2>{initialValue}</h2>
                <Button onClick={clickHandler}
                        size="lg"
                        variant="outline-primary">Start/Pause</Button>
                <Button onClick={resetHandler}
                        size="lg"
                        variant="outline-secondary">Reset</Button>
                </div>
}

export default Counter;