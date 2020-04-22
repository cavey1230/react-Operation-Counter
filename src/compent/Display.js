import React from "react";


const Display = (props) => {
    return (
        <div id="display">
            <h1>{props.Str_slice===""?0:props.Str_slice}</h1>
            <p>{props.result===""?0:props.result}</p>
        </div>
    )
}

export {Display}