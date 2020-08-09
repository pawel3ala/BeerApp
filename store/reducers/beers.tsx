import { BeerItem } from '../../types'
import axios from 'axios'
import { Dispatch } from 'redux'
import { store } from '../configureStore';

const pagesPerPage: number = 12;
const beersReducerDefaultState: BeerItem[] = [];

const SET_ALL_BEERS = 'SET_ALL_BEERS'
const SET_MORE_BEERS = 'SET_MORE_BEERS'

interface SetAllBeersAction {
  type: typeof SET_ALL_BEERS,
  beers: BeerItem[]
}

interface SetMoreBeersAction {
  type: typeof SET_MORE_BEERS,
  beers: BeerItem[]
}

type BeerActionTypes = SetAllBeersAction | SetMoreBeersAction

const setAllBeers = (beers: BeerItem[]): SetAllBeersAction => ({
  type: SET_ALL_BEERS,
  beers
})

const setMoreBeers = (beers: BeerItem[]): SetMoreBeersAction => ({
  type: SET_MORE_BEERS,
  beers
})

let filtersURLString = ""

const applyFilters = () => {
  // filtersURLString += "&abv_gt=0"
  // filtersURLString += "&abv_lt=110"
  // filtersURLString += "&ibu_gt=0"
  // filtersURLString += "&ibu_lt=110"
}

export const fetchAllBeers = () => {
  return async (dispatch: Dispatch) => {
    try {
      applyFilters()
      const { data } = await axios.get(`https://api.punkapi.com/v2/beers?page=1&per_page=${pagesPerPage.toString()}${filtersURLString}`)
      console.log(`https://api.punkapi.com/v2/beers?page=1&per_page=${pagesPerPage.toString()}${filtersURLString}`)
      dispatch(setAllBeers(data))
    } catch (err) {
      console.error(err)
    }
  }
}

export const fetchMoreBeers = (pageNumber: number) => {
  return async (dispatch: Dispatch) => {
    try {
      applyFilters()
      const { data } = await axios.get(`https://api.punkapi.com/v2/beers?page=${pageNumber.toString()}&per_page=${pagesPerPage.toString()}${filtersURLString}`)
      dispatch(setMoreBeers(data))
    } catch (err) {
      console.error(err)
    }
  }
}

const beerReducer = (state = beersReducerDefaultState, action: BeerActionTypes): BeerItem[] => {
  switch (action.type) {
    case "SET_ALL_BEERS":
      return action.beers;
    case "SET_MORE_BEERS":
      return [...state, ...action.beers]
    default:
      return state;
  }
};

export default beerReducer;