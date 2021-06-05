const getVisiblePosts = (posts, { text, id }) => {
    return posts.filter((post) => {
        let idMatch = false;
        let textMatch = false;
        
        if (id !== "") {
            idMatch = post.id == id;
        }else{
            idMatch = true
        }

        if (text !== "") {
            textMatch = post.title.toLowerCase().includes(text.toLowerCase()) || post.contents.toLowerCase().includes(text.toLowerCase());
        } else {
            textMatch = true;
        }
        return idMatch && textMatch;
    });
}

export default getVisiblePosts;