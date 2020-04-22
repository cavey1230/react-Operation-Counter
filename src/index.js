import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, combineReducers} from "redux";
import {Provider, connect} from "react-redux";
import {equalsReducer, inputAction} from "./reducer/equalsReducer";
import {displayReducer, displayAction,removeAction} from "./reducer/displayReducer";

const reducers = combineReducers({
    eque: equalsReducer,
    dis: displayReducer
})

const store = createStore(reducers);

console.log("store", store.getState())

const mapStateToProps = (state) => {
    return {
        result: state.eque,
        dis: state.dis
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        resultAction: (Reg) => {
            dispatch(inputAction(Reg));
        },
        displayAction: (Reg) => {
            dispatch(displayAction(Reg));
        },
        removeAction: ()=>{
            dispatch(removeAction());
        }
    }
};

const Con = connect(mapStateToProps, mapDispatchToProps)(App);

const render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <Con/>
        </Provider>,
        document.getElementById('root')
    );
};
render();
store.subscribe(render);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
