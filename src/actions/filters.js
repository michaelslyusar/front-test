//SET_TEXT_FILTER
export const setTextFilter = (text) => ({
    type: "SET_TEXT_FILTER",
    text
});

//SET_ID_FILTER
export const setIdFilter = (id) => ({
    type: "SET_ID_FILTER",
    id
});

//RESET_FILTERS
export const resetFilters = () => ({
    type: "RESET_FILTERS"
});