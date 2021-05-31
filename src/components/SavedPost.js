import React from 'react';


const SavedPost = ({title, contents}) => {
    return (
        <div>
            <div className="card-title">
                {title}
            </div>
            <div className="card-contents">
                {contents}
            </div>
            <button>Remove</button>
        </div>

    );

};
export default SavedPost;