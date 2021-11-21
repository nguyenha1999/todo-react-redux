import { all } from 'redux-saga/effects'
import todoSaga from './Todo';
import otherSaga from './Other';
import wordSaga from './Word';

export default function* rootSaga() {
    yield all(
        [
            todoSaga(),
            otherSaga(),
            wordSaga()
        ]
    )
}