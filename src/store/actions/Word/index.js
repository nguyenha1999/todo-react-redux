export const types = {
    GET_LIST_TODO_WORD: 'GET_LIST_TODO_WORD',
    GET_LIST_TODO_WORD_SUCCESS: 'GET_LIST_TODO_WORD_SUCCESS',
    GET_LIST_TODO_WORD_ERROR: 'GET_LIST_TODO_WORD_ERROR'
}


export const getListTodoWord = (payload) => ({
    type: types.GET_LIST_TODO_WORD,
    payload
})

export const getListTodoWordSuccess = (data) => ({
    type: types.GET_LIST_TODO_WORD_SUCCESS,
    data
})

export const getListTodoWordError = (data) => ({
    type: types.GET_LIST_TODO_WORD_ERROR,
    data
})