import React from 'react';
import { connect } from 'react-redux';
import Post from './Post';

import selectPosts from '../selectors/posts';

const PostsList = (props) => (
    <div className="other-posts" id="other-posts">
        {props.posts.map((post) => {
            if (post.type === 2) {
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

export default connect(mapStateToProps)(PostsList);