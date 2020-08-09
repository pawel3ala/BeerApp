import { FiltersConfigObject } from '../../types'
import axios from 'axios'
import { Dispatch } from 'redux'
import { store } from '../configureStore';

const filtersReducerDefaultState: FiltersConfigObject = {
    abv_min: null,
    abv_max: null,
    ibu_min: null,
    ibu_max: null
};

const SET_FILTERS = 'SET_FILTERS'
const CLEAR_FILTERS = 'CLEAR_FILTERS'

interface SetFiltersAction {
    type: typeof SET_FILTERS,
    filters: FiltersConfigObject
}

interface ClearFiltersAction {
    type: typeof CLEAR_FILTERS,
}

type FiltersActionTypes = SetFiltersAction | ClearFiltersAction

export const setFilters = (filters: FiltersConfigObject): SetFiltersAction => ({
    type: SET_FILTERS,
    filters
})

export const clearFilters = (): ClearFiltersAction => ({
    type: CLEAR_FILTERS
})

const filtersReducer = (state = filtersReducerDefaultState, action: FiltersActionTypes): FiltersConfigObject => {
    switch (action.type) {
        case "SET_FILTERS":
            return action.filters
        case "CLEAR_FILTERS":
            return filtersReducerDefaultState
        default:
            return state;
    }
};

export default filtersReducer;