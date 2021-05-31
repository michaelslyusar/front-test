import {createStore } from 'redux';
// Create Store object
// Dispatch action to the store
// Based on action type return updated state( configured in store)
// 
const store = createStore((state = {count : 0}, action) =>{
    switch(action.type){
        case 'INCREMENT':
            return{
                count:state.count + 1
            };
        default:
            return state;

    }
    
});

store.dispatch({type:'INCREMENT'});
console.log(store.getState());