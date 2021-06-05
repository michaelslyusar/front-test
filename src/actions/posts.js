//ADD_POST
export const addPost = ({ id, title, contents, type = 0 } = {}) => ({
    type: 'ADD_POST',
    post: {
        id,
        title,
        contents,
        type
    }
});
//REMOVE_POST
export const removePost = ({ id }) => ({
    type: "REMOVE_POST",
    id
});
//EDIT_POST
export const editPost = (id, updates) => ({
    type: "EDIT_POST",
    id,
    updates
});
//TOGGLE_TYPE
export const toggleType = (id) => ({
    type: "TOGGLE_TYPE",
    id
});
 