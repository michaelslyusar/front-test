import { createStore, combineReducers } from 'redux';
import axios from 'axios';


// async function load() {
//     await axios.get('https://jsonplaceholder.typicode.com/posts')
//         .then((res) => {
//             console.log(res)
//         })
//         .catch((err) => { console.log(err) });
// }
// load();



const handleChange = () => {
    const state = store.getState();
    const visibleExpenses = getVisiblePosts(state.posts, state.filters);
    console.log(state);
    console.log(visibleExpenses);
}

const unsubscribe = store.subscribe(handleChange)


// demoState = {
//     posts:[{
//         postId:'',
//         title:'',
//         contents:'',
//         type:''
//     },
//     {
//         postId:'',
//         title:'',
//         contents:'', 
//         type:''
//     }],
//     filters:{
//         text:'',
//         postId:''
//     }
// }


store.dispatch(addPost({
    id: 1,
    title: "TITLE",
    contents: "CONTENTS act1",
    type: 1
}));

store.dispatch(addPost({
    id: 2,
    title: "TITLE2",
    contents: "CONTENTS2 mik",
    type: 2
}));



store.dispatch(editPost(2, { title: "T3" }));
store.dispatch(setTextFilter("LE"));
store.dispatch(setIdFilter(2));
store.dispatch(setTextFilter("t1"));





