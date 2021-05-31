import axios from 'axios';
import React from 'react';
import Header from './Header';
import Post from './Post';
import SavedPost from './SavedPost';


const api = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/posts',
});

const posts = api.get('/').then(res => {
                    console.log(res.data.filter(post => post.userId == 1))
                    return (res.data.filter(post => post.userId == 1));
                });

const saved_posts = api.get('/').then(res => {
                        console.log(res.data.filter(post => post.userId != 1))
                        return (res.data.filter(post => post.userId != 1));
                    });

console.log(posts);
console.log(saved_posts);

function Posts() {
    return (

        <div>
            <Header />
            {/* {saved_posts.map(post => <SavedPost title={post.title} contents={post.contents}/>)}
            {posts.map(post => <Post title={post.title} contents={post.contents}/>)} */}
            <Post 
                title="asdasd"
                contents="cont"
                />
            <SavedPost 
            title="asdasd"
            contents="cont"
            />
        </div>
        
    )
}

export default Posts;