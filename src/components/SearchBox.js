import React from 'react';

const SearchBox = ({ searchField, searchChange }) => {
    return (
        <div className='pa2'>
            <input 
            className='pa3 br3 ba b--purple bg-light-blue' 
            type='search' 
            placeholder='search the prototype!' 
            onChange = {searchChange} 
            />
        </div>
    );
}

export default SearchBox;