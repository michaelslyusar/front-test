import React from 'react';


const Post = ({title, contents}) => {
    return (
        <div>
            <div className="card-title">
                {title}
            </div>
            <div className="card-contents">
                {contents}
            </div>
            <div>
                <button>Add</button>
            </div>
        </div>

    );

};
export default Post;