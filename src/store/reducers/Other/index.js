import { types } from '../../actions/Other'

const initState = {
    other: [],
    error: []
}

export default (state = initState, action) => {
    switch (action.type) {
        case types.GET_LIST_TODO_OTHER_SUCCESS:
            return {
                ...state,
                other: action.data.data,
            }
        default:
            return state
    }
}