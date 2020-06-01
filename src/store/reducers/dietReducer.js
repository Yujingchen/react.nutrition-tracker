const initialState = {
    diets: {
        goal: {},
        total: {}
    }
};

export default function (state = initialState, action) {
    switch (action.type) {
        case "FETCH_DIETS":
            return Object.assign({}, state, {
                diets: action.response
            })
        default:
            return state;
    }
}