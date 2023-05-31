import { ADD_ONE, ADD_SOME, REMOVE_1, REM_SOME, R_33 } from "./constants";

export default function countReducer(state, action) {

    let s = state;

    switch(action.type) {
        case ADD_ONE:
            s++;
        break;
        case REMOVE_1:
            s--;
        break;
        case R_33:
            s -= 33;
        break;
        case ADD_SOME:
            s += action.payload;
        break;
        case REM_SOME:
            s -= action.payload;
        break;
        default:
    }


    return s;
}