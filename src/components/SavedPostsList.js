import React from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import selectPosts from '../selectors/posts';

const SavedPostsList = (props) => (
    <div className="saved-posts">
        {props.posts.map((post) => {
            if (post.type === 1) {
                return <Post key={post.id} {...post} />;
            }
        })}
    </div>
);

const mapStateToProps = (state) => {
    return {
        posts: selectPosts(state.posts, state.filters)
    };
}

export default connect(mapStateToProps)(SavedPostsList);