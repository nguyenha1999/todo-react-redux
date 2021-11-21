import { types } from '../../actions/Todo'

const initState = {
    items: [],
    err: []
};

export default (state = initState, action) => {
    switch (action.type) {
        case types.GET_LIST_TODO_SUCCESS:
            return {
                ...state,
                items: action.data.data
            }
        default:
            return state;
    }

}