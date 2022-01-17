import React, {useEffect, useState} from "react";
import './Counter.css';

function Counter (){
        const [seconds, setSeconds] = useState(120);
        let [active, setActive] = useState(false);
        let initialValue = new Date(seconds * 1000).toISOString().substr(14, 5);


       //  useEffect(() => {
       //      if(active) {
       //          clearInterval(myInterval);
       //          setActive(active => !active);
       //      }
       // }, [active])

        // if (seconds<=0) setActive(active=false);

        function countdown (){
            return setSeconds((seconds)=>seconds-1);
        }

        let myInterval;
        const clickHandler = () => {
            if (active===false){
                myInterval = setInterval(countdown, 1000);
                setActive(active => active)
            }
            else if (active){
                clearInterval(myInterval);
            //     setSeconds(prevState => prevState);
             }
        }

        return <div>
                <p>{initialValue}</p>
                <button onClick={clickHandler}>Start/Pause</button>

                </div>
}

export default Counter;