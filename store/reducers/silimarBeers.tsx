import { BeerItem } from '../../types'
import axios from 'axios'
import { Dispatch } from 'redux'
import { similarity } from '../../constants/AppConstants'

const beersReducerDefaultState: BeerItem[] = [];

const SET_SIMILAR_BEERS = 'SET_SIMILAR_BEERS'

interface SetSimilarBeersAction {
    type: typeof SET_SIMILAR_BEERS,
    beers: BeerItem[]
}

type SimilarBeersActionTypes = SetSimilarBeersAction

const setSimilarBeers = (beers: BeerItem[]): SetSimilarBeersAction => ({
    type: SET_SIMILAR_BEERS,
    beers
})

export const fetchSimilarBeers = (beer: BeerItem) => {
    return async (dispatch: Dispatch) => {
        try {

            const applyFilters = () => {
            
                let filtersURLString: string = "";
            
                const { abv, ibu } = beer
                const [abv_gt, abv_lt, ibu_gt, ibu_lt] = [
                    abv * (1 - similarity),
                    abv * (1 + similarity),
                    ibu * (1 - similarity),
                    ibu * (1 + similarity),
                ]
            
                filtersURLString += `&abv_gt=${Math.floor(abv_gt).toString()}`
                filtersURLString += `&abv_lt=110${Math.floor(abv_lt).toString()}`
                filtersURLString += `&ibu_gt=${Math.floor(ibu_gt).toString()}`
                filtersURLString += `&ibu_lt=${Math.floor(ibu_lt).toString()}`
                
                return filtersURLString
            }
            const filtersURLString = applyFilters()
            
            const { data } = await axios.get(`https://api.punkapi.com/v2/beers?${filtersURLString}`)
            return dispatch(setSimilarBeers(data))
        } catch (err) {
            console.error(err)
        }
    }
}

const similarBeersReducer = (state = beersReducerDefaultState, action: SimilarBeersActionTypes): BeerItem[] => {
    switch (action.type) {
        case "SET_SIMILAR_BEERS":
            return action.beers;
        default:
            return state;
    }
};

export default similarBeersReducer;