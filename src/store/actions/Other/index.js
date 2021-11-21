export const types = {
    GET_LIST_TODO_OTHER: 'GET_LIST_TODO_OTHER',
    GET_LIST_TODO_OTHER_SUCCESS: 'GET_LIST_TODO_OTHER_SUCCESS',
    GET_LIST_TODO_OTHER_ERROR: 'GET_LIST_TODO_OTHER_ERROR'
}


export const getListTodoOther = (payload) => ({
    type: types.GET_LIST_TODO_OTHER,
    payload
})

export const getListTodoOtherSuccess = (data) => ({
    type: types.GET_LIST_TODO_OTHER_SUCCESS,
    data
})

export const getListTodoOtherError = (data) => ({
    type: types.GET_LIST_TODO_OTHER_ERROR,
    data
})