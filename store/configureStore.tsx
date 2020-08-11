import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import beersReducer from "./reducers/beers";
import filtersReducer from "./reducers/filters";
import selectedBeersReducer from "./reducers/selectedBeer";
import similarBeersReducer from "./reducers/silimarBeers"


export const rootReducer = combineReducers({
    beers: beersReducer,
    filtersReducer,
    selectedBeersReducer,
    similarBeersReducer
});

export type AppState = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer, applyMiddleware(thunk));