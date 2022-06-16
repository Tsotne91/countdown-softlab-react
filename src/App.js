import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import Timer from "./Timer";

export default function App(){

    return (
        <>
            <div className="text-center my-3" >
            <Timer initialSeconds={5}/>
            </div>
        </>
    )
}