import * as actions from '../const';

const defaultState = {
    helloName: 'Hello Visitor'
}

const Hello = (state = defaultState, action) => {
    switch (action.type) {
        case actions.HELLO:
            return { ...state, helloName: action.value }
        default:
            return state;
    }
}

export default Hello;