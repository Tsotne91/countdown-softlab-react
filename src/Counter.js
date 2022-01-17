import React, {useEffect, useState} from "react";

function Counter (){
        const [seconds, setSeconds] = useState(120);
        const [active, setActive] = useState(false);

        let initialValue = new Date(seconds * 1000).toISOString().substr(14, 5);

        useEffect(() => {
        countdown();
       }, [active])

        function countdown (){
            return setSeconds(seconds-1);
        }

        const startClickHandler = () => {
           const myInterval = setInterval(countdown, 1000);
           if(!active) clearInterval(myInterval);
        }

        const stopClickHandler = () => setActive(active => !active);

        return <div>
                <p>{initialValue}</p>
                <button onClick={startClickHandler}>Start</button>
                <button onClick={stopClickHandler}>Pause</button>
        </div>
}

export default Counter;