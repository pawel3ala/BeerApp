import { BeerItem } from '../../types'
import axios from 'axios'
import { Dispatch } from 'redux'

const beersReducerDefaultState: BeerItem[] = [];
const SET_ALL_BEERS = 'SET_ALL_BEERS'

interface SetAllBeersAction {
  type: typeof SET_ALL_BEERS,
  beers: BeerItem[]
}

type BeerActionTypes = SetAllBeersAction

const setAllBeers = (beers: BeerItem[]): SetAllBeersAction => ({
  type: SET_ALL_BEERS,
  beers
})

export const fetchAllBeers = () => {
  return async (dispatch: Dispatch) => {
    try {
      const { data } = await axios.get('https://api.punkapi.com/v2/beers')
      dispatch(setAllBeers(data))
    } catch (err) {
      console.error(err)
    }
  }
}

const beerReducer = (state = beersReducerDefaultState, action: BeerActionTypes): BeerItem[] => {
  switch (action.type) {
    case "SET_ALL_BEERS":
      return action.beers;
    default:
      return state;
  }
};

export default beerReducer;