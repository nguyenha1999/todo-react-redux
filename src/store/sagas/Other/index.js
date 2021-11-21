import { put, call, takeLatest } from 'redux-saga/effects';
import {
    getListTodoOtherSuccess,
    getListTodoOtherError,
    types
} from '../../actions/Other';

import otherApi from '../../../api/others';


function* getListTodoOther(action) {
    try {
        const response = yield call(otherApi.getAll, action.payload);
        yield put(getListTodoOtherSuccess(response))
        return response
    } catch (error) {
        yield put(getListTodoOtherError(error));
        return error
    }
}

export default function* otherSaga() {
    yield takeLatest(types.GET_LIST_TODO_OTHER, getListTodoOther);
}