import React from 'react';
import {ActionPad} from "./compent/ActionPad"
import "./css/App.css"

function App(props) {
    return (
        <div className="center_pad">
            <ActionPad action={props.resultAction}
                       result={props.result}
                       dis={props.dis}
                       disaction={props.displayAction}
                       removedis={props.removeAction}
                       getResAction={props.getResAction}
            />
        </div>
    )
}

export default App;
