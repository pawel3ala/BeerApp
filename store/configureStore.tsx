import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import beersReducer from "./reducers/beers";
import filtersReducer from "./reducers/filters";

export const rootReducer = combineReducers({
    beers: beersReducer,
    filtersReducer
});

export type AppState = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer, applyMiddleware(thunk));