const postsReducerDefaultState = [];

const postsReducer = (state = postsReducerDefaultState, action) => {
    switch (action.type) {
        case "ADD_POST":
            return ([
                ...state,
                action.post
            ]);
        case "REMOVE_POST":
            return state.filter(({ id }) => id !== action.id);
        case "EDIT_POST":
            return state.map((post) => {
                if (post.id === action.id) {
                    return ({
                        ...post,
                        ...action.updates
                    });
                } else {
                    return post;
                }
            });
        case "TOGGLE_TYPE":
            return state.map((post) => {
                if (post.id === action.id) {
                    let type = 0;
                    if (post.type === 1) {
                        type = 2;
                    } else {
                        type = 1;
                    }
                    return ({
                        ...post,
                        type
                    });
                } else {
                    return post;
                }
            });
        default:
            return state;
    }
};

export default postsReducer;
