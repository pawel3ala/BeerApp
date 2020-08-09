import { BeerItem } from '../../types'
import axios from 'axios'
import { Dispatch } from 'redux'
import { store } from '../configureStore';

const selectedBeerReducerDefaultState: never[] = [];

const SET_SELECTED_BEER = 'SET_SELECTED_BEER'

interface SetSelectedBeerAction {
    type: typeof SET_SELECTED_BEER,
    beer: BeerItem
}

type SelectedBeerActionTypes = SetSelectedBeerAction

export const setSingleBeer = (beer: BeerItem): SelectedBeerActionTypes => ({
    type: SET_SELECTED_BEER,
    beer
})

const selectedBeersReducer = (state = selectedBeerReducerDefaultState, action: SelectedBeerActionTypes) => {
    switch (action.type) {
        case "SET_SELECTED_BEER":
            return action.beer
        default:
            return state;
    }
};

export default selectedBeersReducer;