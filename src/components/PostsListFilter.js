import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, setIdFilter } from '../actions/filters';

const PostListFilters = (props) => (
    <div className="filters-container">
        <h3>Filter Posts</h3>
        <div>
            <label htmlFor="searchByText" className="form-label filter-label">Search By Text:</label>
            <input type="text" id="searchByText" className="form-control filter-input" value={props.filters.text} onChange={(e) => {
                props.dispatch(setTextFilter(e.target.value));
            }} />
        </div>
        <div>
            <label htmlFor="searchById" className="form-label filter-label">Search By Id:</label>
            <input type="number" id="searchById" value={props.filters.id} className="form-control filter-input" onChange={(e) => {
                props.dispatch(setIdFilter(e.target.value));
            }} />
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
};

export default connect(mapStateToProps)(PostListFilters);