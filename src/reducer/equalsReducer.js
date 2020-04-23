const equalsReducer = (state = 0, action) => {
    switch (action.type) {
        case "ADD":
            return action.inputArr
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