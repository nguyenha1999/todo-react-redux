export const types = {
    GET_LIST_TODO: 'GET_LIST_TODO',
    GET_LIST_TODO_SUCCESS: 'GET_LIST_TODO_SUCCESS',
    GET_LIST_TODO_ERROR: 'GET_LIST_TODO_ERROR'
}

//get

export const getListTodo = (payload) => ({
    type: types.GET_LIST_TODO,
    payload
})

export const getListTodoSuccess = (data) => ({
    type: types.GET_LIST_TODO_SUCCESS,
    data
})

export const getListTodoError = (data) => ({
    type: types.GET_LIST_TODO_ERROR,
    data
})

