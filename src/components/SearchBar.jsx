import React from 'react';

const SearchBar = React.forwardRef(({
    value,
    isLoading,
    handleInputChange, 
    handleFormSubmit,
}, ref) => {
    return ( 
        <form className='search-form' onSubmit={handleFormSubmit} >
            <input
              ref={ref} 
              type="text" 
              value={value}
              onChange={handleInputChange}
              disabled={isLoading}
              placeholder='Search Food'
                className='form-control' 
            />
            <input 
                disabled={isLoading || !value}  
                type="submit" 
                className='button'
                value="search"
            />

        </form>
     );
})
 
export default SearchBar;