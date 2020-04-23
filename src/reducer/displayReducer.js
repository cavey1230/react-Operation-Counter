const displayReducer = (state = "", action) => {
    switch (action.type) {
        case "ADDDIS":
            return state + action.inputArr
        case "REMOVE":
            return ""
        case  "GET":
            return state===""? "":action.input
        default :
            return state

    }
};

const displayAction = (input) => {
    return {
        type: "ADDDIS",
        inputArr: input
    }
};

const removeAction = () => {
    return {
        type: "REMOVE"
    }
};

const getResAction = (input) => {
    return {
        type: "GET",
        input: input
    }
}

export {displayReducer, displayAction, removeAction,getResAction};