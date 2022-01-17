import React, {useEffect, useState} from "react";
import './Counter.css';

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
                console.log(seconds);
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

        return <div>
                <p>{initialValue}</p>
                <button onClick={clickHandler}>Start/Pause</button>
                </div>
}

export default Counter;