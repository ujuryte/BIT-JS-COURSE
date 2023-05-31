import { ADD_ONE, ADD_SOME, REMOVE_1, REM_SOME, R_33 } from "./constants";

export const addOne = _ => {
    const action = {
        type: ADD_ONE
    };

    return action;
}

export const remOne = _ => {
    const action = {
        type: REMOVE_1
    };

    return action;
}

export const rem33 = _ => {
    const action = {
        type: R_33
    };

    return action;
}


export const addCustom = addValue => {
    const action = {
        type: ADD_SOME,
        payload: addValue
    };

    return action;
}

export const remCustom = remValue => {
    const action = {
        type: REM_SOME,
        payload: remValue
    };

    return action;
}