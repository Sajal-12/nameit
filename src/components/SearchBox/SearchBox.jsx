import React from "react";
import './SearchBox.css';

const SearchBox = ({handleInputChange}) => {
    return (
        <div className="search-container">
            <input
                onChange={(event) => handleInputChange(event.target.value)}
                placeholder="Type Keywords"
                className="search-input" />
        </div>
    );
}

export default SearchBox;