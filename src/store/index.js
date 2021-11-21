import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const storeApp = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware]
});

const Store = (props) => {
    return (
        <Provider store={storeApp}>
            {props.children}
        </Provider>
    )
}

sagaMiddleware.run(rootSaga);

export default Store;