
const equalsReducer = (state = 0, action) => {
    switch (action.type) {
        case "ADD":
            let countArr = action.inputArr;
            let oper = ["*", "/", "+", "-"];
            for (let i = 0; i < oper.length; i++) {
                while (countArr.indexOf(oper[i]) !== -1) {
                    let operNum = 0;
                    let index = countArr.indexOf(oper[i]);
                    switch (oper[i]) {
                        case "*":
                            operNum = parseInt(countArr[index - 1]) * parseInt(countArr[index + 1]);
                            break;
                        case "/":
                            operNum = parseInt(countArr[index - 1]) / parseInt(countArr[index + 1]);
                            break;
                        case "+":
                            operNum = parseInt(countArr[index - 1]) + parseInt(countArr[index + 1]);
                            break;
                        case "-":
                            operNum = parseInt(countArr[index - 1]) - parseInt(countArr[index + 1]);
                            break;
                        default:
                            console.log("err for operaction");
                    }
                    countArr.splice(index - 1, 3, operNum);
                }
            }
            console.log(countArr);
            return countArr
        case "REMOVE":
            return ""
        default :
            return state

    }
};

const inputAction = (input) => {
    return {
        type: "ADD",
        inputArr: input
    }
};

export {equalsReducer, inputAction};