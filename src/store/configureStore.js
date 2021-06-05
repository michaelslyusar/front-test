import { createStore, combineReducers } from 'redux';
import filtersReducer from '../reducers/filters';
import postsReducer from '../reducers/posts';


export default () => {
    const store = createStore(combineReducers({
        posts: postsReducer,
        filters: filtersReducer
    }));

    return store;
}
