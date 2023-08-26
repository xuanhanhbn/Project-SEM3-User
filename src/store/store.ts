import {
  Action,
  combineReducers,
  configureStore,
  ThunkAction,
} from "@reduxjs/toolkit";
import { connectRouter, routerMiddleware } from "connected-react-router";
import createSagaMiddleware from "redux-saga";
import { history } from "utils";
import { all } from "redux-saga/effects";

// LOGIN
import loginReducer from "pages/auth/components/login/loginSlice";
import loginSaga from "pages/auth/components/login/loginSaga";

// ABOUT
import aboutReducer from "pages/about/aboutSlice";
import aboutSaga from "pages/about/aboutSaga";

const rootReducer = combineReducers({
  router: connectRouter(history),
  login:loginReducer,
  about:aboutReducer
});
function* rootSaga() {
  yield all([loginSaga(),aboutSaga()]);
}

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware, routerMiddleware(history)),
});

sagaMiddleware.run(rootSaga);

export { default as Actions } from "./actions";

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
