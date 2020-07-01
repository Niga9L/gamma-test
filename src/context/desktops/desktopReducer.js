import {ADD_NUMBER} from "../types";

const handlers = {
    [ADD_NUMBER]: (state, action) => ([...action.newState]),
    DEFAULT: state => state
}

export const desktopReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}