import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import Header from './Header';
import { connect } from 'react-redux';

import PostsList from './PostsList';
import SavedPostsList from './SavedPostsList';
import Post from './Post';
import PostListFilters from './PostsListFilter';
import AddPostForm from './AddPostForm';
import { addPost } from '../actions/posts';


const PostsPage = (props) => {
    // LOAD POSTS  INTO REDUX STORE WHEN PAGE LOADS
    useEffect(() => {
        async function load() {
            await axios.get('https://jsonplaceholder.typicode.com/posts')
                .then((res) => {
                    res.data.map(post => {
                        if (post.userId == 1) {
                            props.dispatch(addPost({ id: post.id, title: post.title, contents: post.body, type: 1 }));
                        } else {
                            props.dispatch(addPost({ id: post.id, title: post.title, contents: post.body, type: 2 }));
                        }
                    })
                })
                .catch((err) => { console.log(err) });
        }
        load();
    }, []);


    return (
        <div>
            <Header />
            <div className="grid-container" id="grid-container">
                <div className="side-menu">
                    <PostListFilters />
                    <AddPostForm />
                </div>
                <div>
                    <h3>Saved Posts</h3>
                    <div>
                        <SavedPostsList />
                    </div>
                </div>

                <div>
                    <h3>Unsaved Posts</h3>
                    <div>
                        <PostsList />
                    </div>
                </div>
            </div>

        </div>

    )
}

export default connect()(PostsPage);