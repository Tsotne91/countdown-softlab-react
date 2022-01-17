import React from "react";
import Counter from "./Counter";

const containerStyle = {
    display: "flex"
}

export default function App(){

    return (
        <>
            <div style={{marginBottom: 100}}>
            <Counter/>
            </div>
        <div style={containerStyle}>
        </div>
        </>
    )
}