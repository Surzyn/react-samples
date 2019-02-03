const initialState = {
    isLoading: false,
    beers: []
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case "GET_DATA":
            var newState = Object.assign({}, state);
            newState.isLoading = true;
            return newState;
        case "BEERS_LOADING":
            return { ...state, isLoading: true };
        case "BEERS_FULFILLED":
            return { ...state, beers: action.payload, isLoading: false };
        default:
            return state;
    }
};

export default reducer;