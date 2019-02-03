export function getData() {
    return { type: "GET_DATA" };
};

export function fetchBeers() {
    return { type: 'BEERS_LOADING' };
}

export function fetchBeersFulfilled(beers) {
    return { type: 'BEERS_FULFILLED', payload: beers };
}