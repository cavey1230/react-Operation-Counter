import React, {Component} from "react";
import {Display} from "./Display";

class ActionPad extends Component {

    buttonClick(clickIn) {
        switch (clickIn) {
            case "ACE":
                this.props.removedis();
                break;
            default:
                this.props.disaction(clickIn)
        }
        console.log(this.props.dis);
    };

    equalsClick() {
        let Rexreg = /\d+\.*\d*|[/*\-+]+/g;
        let symRex = /[/*\-+]/g;
        let numRex = /([0]*)([1-9]+[0-9]*)/g;
        if (this.props.dis.length > 0) {
            let newArr = this.props.dis.match(Rexreg).map(item =>
                symRex.test(item) ? item.slice(-1) : item.replace(numRex, "$2")
            );
            console.log(newArr);
            this.props.action(newArr);
        }
    };

    render() {
        const numButton = () => {
            let button = [
                "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
             return button.map((item, i) =>
                <button key={"button_" + i} className="numButton" id={item}
                        onClick={() => this.buttonClick(i)}>{i}</button>);
        };

        const operButton = () => {
            let button = ["/", "*", "-", "+", "."];
            let buttonID = ["divide", "multiply", "subtract", "add", "decimal"];
            return  button.map((item, i) =>
                <button key={"button_" + buttonID[i]} className="operButton" id={buttonID[i]}
                        onClick={() => this.buttonClick(item)}>{item}</button>);
        };
        return (
            <div>
                <Display Str_slice={this.props.dis} result={this.props.result} />
                {numButton()}
                {operButton()}
                <button key="button_equals" id="equButton"
                        onClick={() => this.equalsClick()}>=
                </button>
                <button key="button_ace" id="acButton"
                        onClick={() => this.buttonClick("ACE")}>AC
                </button>
            </div>
        )
    };
}


export {ActionPad}