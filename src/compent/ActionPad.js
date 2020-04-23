import React, {Component, Fragment} from "react";
import {Display} from "./Display";

class ActionPad extends Component {
    buttonClick(clickIn) {
        //
        switch (clickIn) {
            case "ACE":
                this.props.removedis();
                break;
            default:
                this.props.disaction(clickIn)
        }
    };

    equals(input) {
        let countArr = input;
        let oper = ["*", "/", "+", "-"];
        for (let i = 0; i < oper.length; i++) {
            while (countArr.indexOf(oper[i]) !== -1) {
                let operNum = 0;
                let index = countArr.indexOf(oper[i]);
                switch (oper[i]) {
                    case "*":
                        operNum = (parseFloat(countArr[index - 1]) * parseFloat(countArr[index + 1])).toFixed(2);
                        break;
                    case "/":
                        operNum = (parseFloat(countArr[index - 1]) / parseFloat(countArr[index + 1])).toFixed(2);
                        break;
                    case "+":
                        operNum = (parseFloat(countArr[index - 1]) + parseFloat(countArr[index + 1])).toFixed(2);
                        break;
                    case "-":
                        operNum = (parseFloat(countArr[index - 1]) - parseFloat(countArr[index + 1])).toFixed(2);
                        break;
                    default:
                        console.log("err for operaction");
                }
                countArr.splice(index - 1, 3, operNum);
            }
        }
        return countArr
    };

    equalsClick() {
        let Rexreg = /\d+\.*\d*|[/*\-+]+/g;
        let symRex = /[/*\-+]/g;
        let numRex = /([0]*)([1-9]+[0-9]*)/g;
        if (this.props.dis.length > 0) {
            let newArr = this.props.dis.match(Rexreg).map(item =>
                symRex.test(item) ? item.slice(-1) : item.replace(numRex, "$2")
            );
            this.props.getResAction(this.equals(newArr));
            this.props.action(this.equals(newArr));
        }
    };

    render() {
        const numButton = () => {
            let button = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
            return button.map((item, i) =>
                <button key={"button_" + i + 1} className="numButton" id={item}
                        onClick={() => this.buttonClick(i + 1)}>{i + 1}</button>);
        };
        const operButton = () => {
            let button = [ "*", "-", "+"];
            let buttonID = ["divide", "multiply", "subtract", "add"];
            return button.map((item, i) =>
                <button key={"button_" + buttonID[i]} className="operButton" id={buttonID[i]}
                        onClick={() => this.buttonClick(item)}>{item}</button>);
        };
        return (
            <Fragment>
                <Display Str_slice={this.props.dis} result={this.props.result}/>
                <div className="action_group">
                    <div className="button_group">
                        <div className="num_group">
                            <button key={"button_zero"} className="numButton" id="zero"
                                    onClick={() => this.buttonClick(0)}>0
                            </button>
                            <button key="button_decimal" className="numButton" id="decimal"
                                    onClick={() => this.buttonClick(".")}>.
                            </button>
                            {numButton()}
                            <button key="button_ace" className="spebutton" id="acButton"
                                    onClick={() => this.buttonClick("ACE")}>AC
                            </button>
                            <button key="button_divide" className="operButton" id="divide"
                                    onClick={() => this.buttonClick("/")}>/</button>
                        </div>
                    </div>
                    <div className="oper_group">
                        {operButton()}
                        <button key="button_equals" className="spebutton" id="equButton"
                                onClick={() => this.equalsClick()}>=
                        </button>
                    </div>
                </div>
            </Fragment>
        )
    };
}


export {ActionPad}