import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
    const [term, setTerm] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        onFormSubmit(term);
    };

    return (
        <div className=" search-bar ui segment">
            <form onSubmit={onSubmit} className="ui form">
                <label>Search For A Video</label>
                <input 
                    type="text" 
                    value={term} 
                    onChange={(event) => setTerm(event.target.value)}
                    placeholder="Search..."
                />
            </form>
        </div>
    );
};

export default SearchBar;