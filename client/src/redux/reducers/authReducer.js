import ACTIONS from '../actions/'

const initialState = {
    user: [],
    isLogged: null,
    isAdmin: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.LOGIN:
            return {
                ...state,
                isLogged: true
            }
        case !ACTIONS.LOGIN:
            return {
                ...state,
                isLogged: false
            }
        case ACTIONS.GET_USER:
            return {
                ...state,
                user: action.payload.user,
                isAdmin: action.payload.isAdmin
            }
        default:
            return state
    }
}

export default authReducer