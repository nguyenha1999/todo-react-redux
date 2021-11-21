import { types } from '../../actions/Word'

const initState = {
    word: [],
    error: []
}

export default (state = initState, action) => {
    switch (action.type) {
        case types.GET_LIST_TODO_WORD_SUCCESS: {
            return {
                ...state,
                word: action.data.data
            }
        } default: {
            return state
        }
    }
}