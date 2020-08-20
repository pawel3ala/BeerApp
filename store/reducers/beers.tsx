import { BeerItem } from '../../types'
import axios from 'axios'
import { Dispatch } from 'redux'
import { beersPerPage } from '../../constants/AppConstants'
import { FiltersConfigObject } from '../../types'

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

const applyFilters = (filtersObject: FiltersConfigObject): string => {

  let filtersURLString = ''
  const { abv_max, abv_min, ibu_max, ibu_min } = filtersObject

  if (abv_min) filtersURLString += `&abv_gt=${abv_min}`
  if (abv_max) filtersURLString += `&abv_lt=${abv_min}`
  if (ibu_min) filtersURLString += `&ibu_gt=${ibu_min}`
  if (ibu_max) filtersURLString += `&ibu_lt=${ibu_max}`

  return filtersURLString
}

export const getBeers = (page: number) => {
  return async (dispatch: Dispatch, getState: any) => {
    try {
      const filtersToApply = getState().filters
      const filtersURLSuffix = applyFilters(filtersToApply)
      const { data } = await axios.get(`https://api.punkapi.com/v2/beers?page=${page}&per_page=${beersPerPage.toString()}${filtersURLSuffix}`)
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