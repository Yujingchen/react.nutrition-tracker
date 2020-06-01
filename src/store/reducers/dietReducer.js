const initialState = {
    diets: {
        goal: {},
        total: {}
    }
};

export default function (state = initialState, action) {
    console.log(action.response)
    switch (action.type) {
        case "FETCH_DIETS":
            return Object.assign({}, state, {
                diets: action.response
            })
        default:
            return state;
    }
}