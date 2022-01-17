import React, {useEffect, useState} from "react";

function Counter (){
        const [seconds, setSeconds] = useState(120);
        const [active, setActive] = useState(false);

        let initialValue = new Date(seconds * 1000).toISOString().substr(14, 5);

        useEffect(() => {
        setTimeout(startClickHandler, 1000);
       }, [active])

        const startClickHandler = () => setSeconds((seconds) => seconds-1);
        const stopClickHandler = () => setActive(active => !active);

        return <div>
                <p>{initialValue}</p>
                <button onClick={startClickHandler}>Start</button>
                <button onClick={stopClickHandler}>Stop</button>
        </div>
}

export default Counter;