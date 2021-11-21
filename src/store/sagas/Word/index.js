import { put, call, takeLatest } from 'redux-saga/effects';
import {
    getListTodoWordSuccess,
    getListTodoWordError,
    types
} from '../../actions/Word';

import wordApi from '../../../api/word';

function* getListTodoWord(action) {
    try {
        const response = yield call(wordApi.getAll, action.payload);
        yield put(getListTodoWordSuccess(response));
        return response
    } catch (error) {
        yield put(getListTodoWordError(error))
        return error
    }
}

export default function* wordSaga() {
    yield takeLatest(types.GET_LIST_TODO_WORD, getListTodoWord)
}