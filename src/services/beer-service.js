import { fetchBeers, fetchBeersFulfilled } from "../actions";

export function getBeers() {
    const BASE_URL = 'https://us-central1-irfighters-beer.cloudfunctions.net/api1/beer';
    return dispatch => {
        dispatch(fetchBeers());
        return fetch(BASE_URL)
            .then(resp => resp.json())
            .then(beers => {
                dispatch(fetchBeersFulfilled(beers));
                return beers;
            })
    }
}