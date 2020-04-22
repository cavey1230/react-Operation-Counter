import React from 'react';
import {ActionPad} from "./compent/ActionPad"

function App(props) {
    return (
        <div>
            <ActionPad action={props.resultAction}
                       result={props.result}
                       dis={props.dis}
                       disaction={props.displayAction}
                       removedis={props.removeAction}
            />
        </div>
    )
}

export default App;
