
const filtersReducerDefaultState = {
    text: "",
    id: ""
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case "SET_TEXT_FILTER":
            return {
                ...filtersReducerDefaultState,
                text: action.text
            };
        case "SET_ID_FILTER":
            return {
                ...filtersReducerDefaultState,
                id: action.id
            };
        case "RESET_FILTERS":
            return {
                ...filtersReducerDefaultState,
            };
        default:
            return state;
    }
};

export default filtersReducer;