import { call, put, takeLatest } from 'redux-saga/effects';
import {
    getListTodoSuccess,
    getListTodoError,
    types
} from '../../actions/Todo'

import todoApi from '../../../api/todo';


function* getListTodo(action) {
    try {
        const response = yield call(todoApi.getAll, action.payload);
        yield put(getListTodoSuccess(response));
        return response;
    } catch (error) {
        yield put(getListTodoError(error));
        return error;
    }
}
export default function* todoSaga() {
    yield takeLatest(types.GET_LIST_TODO, getListTodo);
}