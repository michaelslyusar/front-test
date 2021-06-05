import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './styles/styles.scss';
import configureStore from './store/configureStore'
import AppRouter from './routers/AppRouter';

import { addPost, removePost, editPost, toggleType} from './actions/posts';
import { setIdFilter, setTextFilter } from './actions/filters';

import getVisiblePosts from './selectors/posts'

const store = configureStore();

let state = store.getState();
let visiblePosts = getVisiblePosts(state.posts, state.filters);

const unsubscribe = store.subscribe(() => {
    state = store.getState();
    visiblePosts = getVisiblePosts(state.posts, state.filters);
});

const jsx = (
    <Provider store = {store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'))