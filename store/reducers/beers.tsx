import { BeerItem } from '../../types'
import axios from 'axios'
import { Dispatch } from 'redux'
import { beersPerPage } from '../../constants/AppConstants'
const beersReducerDefaultState: BeerItem[] = [];

const SET_BEERS = 'SET_BEERS';
const CLEAR_BEERS = 'CLEAR_BEERS'

interface SetBeersAction {
  type: typeof SET_BEERS,
  beers: BeerItem[]
}

interface SetClearBeers {
  type: typeof CLEAR_BEERS
}

type BeerActionTypes = SetBeersAction | SetClearBeers

const setBeers = (beers: BeerItem[]): SetBeersAction => ({
  type: SET_BEERS,
  beers
})

export const clearBeers = (): SetClearBeers => ({
  type: CLEAR_BEERS
})

let filtersURLString = ""

const applyFilters = () => {
  // filtersURLString += "&abv_gt=0"
  // filtersURLString += "&abv_lt=110"
  // filtersURLString += "&ibu_gt=0"
  // filtersURLString += "&ibu_lt=110"
}

export const getBeers = (page: number) => {
  return async (dispatch: Dispatch) => {
    try {
      const { data } = await axios.get(`https://api.punkapi.com/v2/beers?page=${page}&per_page=${beersPerPage.toString()}${filtersURLString}`)
      return dispatch(setBeers(data))
    }
    catch (err) {
      console.error(err)
    }
  }
}

const beersReducer = (state = beersReducerDefaultState, action: BeerActionTypes): BeerItem[] => {
  switch (action.type) {
    case "SET_BEERS":
      return [...state, ...action.beers]
    case "CLEAR_BEERS":
      return beersReducerDefaultState
    default:
      return state;
  }
};

export default beersReducer;