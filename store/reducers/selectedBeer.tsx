import { BeerItem } from '../../types'
import axios from 'axios'
import { Dispatch } from 'redux'

const selectedBeerReducerDefaultState = {};

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

export const fetchSingleBeer = (beerId: number) => {
    return async (dispatch: Dispatch) => {
        try {
            let { data } = await axios.get(`https://api.punkapi.com/v2/beers/${beerId.toString()}`)
            const beer = data[0]
            return dispatch(setSingleBeer(beer))
        } catch (err) {
            console.error(err)
        }
    }
}

const selectedBeerReducer = (state = selectedBeerReducerDefaultState, action: SelectedBeerActionTypes) => {
    switch (action.type) {
        case "SET_SELECTED_BEER":
            return action.beer
        default:
            return state;
    }
};

export default selectedBeerReducer;