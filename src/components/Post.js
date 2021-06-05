import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { toggleType} from '../actions/posts';

const Post = ({ dispatch, id, title, type, contents }) => {
    const handleOnClick = () => {
        dispatch(toggleType( id ))
    };
    return (
        <Card style={{ width: '9rem' }} key={id} className="card">
            <Card.Body>
                <h6>Post {id}</h6>
                <Card.Title className="card-title">{title}</Card.Title>
                <hr />
                <Card.Text className="card-content">
                    {contents}
                </Card.Text>
                {type === 1 ?
                    <Button variant="primary" className="card-button" onClick={()=>{
                        dispatch(toggleType(id));
                    }}>Add</Button>
                    :
                    <Button variant="primary" className="card-button" onClick={handleOnClick}>Remove</Button>
                }

            </Card.Body>
        </Card >
    );
};

export default connect()(Post);