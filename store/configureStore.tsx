import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';

import beersReducer from "./reducers/beers";
import filtersReducer from "./reducers/filters";
import selectedBeerReducer from "./reducers/selectedBeer";
import similarBeersReducer from "./reducers/silimarBeers"

export const rootReducer = combineReducers({
    beers: beersReducer,
    filters: filtersReducer,
    selectedBeer: selectedBeerReducer,
    similarBeers: similarBeersReducer
},);

export type AppState = ReturnType<typeof rootReducer>
export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)