import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addPost } from '../actions/posts';

const AddPostForm = (props) => {
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");

    let lastId = props.posts.length + 1;
    const handleSubmit = (e) => {
        e.preventDefault();
        props.dispatch(addPost({ id: lastId, title, contents, type: 2 }))
    };
    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };
    const handleContentsChange = (e) => {
        setContents(e.target.value);
    };
    return (
        <div className="addPostForm">
            <h3>Add Post</h3>
            <p>Automatically adds a post to the "Unsaved posts" section(the id will be the last id available)</p>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title" className="form-label filter-label">Title</label>
                    <input type="text"
                        id="title"
                        name="title"
                        value={title}
                        onChange={handleTitleChange}
                        className="form-control filter-input" />
                </div>
                <div>
                    <label htmlFor="contents" className="form-label filter-label">Contents</label>
                    <input type="text"
                        id="contents"
                        name="contents"
                        value={contents}
                        onChange={handleContentsChange}
                        className="form-control filter-input" />
                </div>
                <button type="submit" value="Submit" className="btn btn-primary">Add post</button>
            </form>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
};

export default connect(mapStateToProps)(AddPostForm);