import React from 'react';

const SearchBox = ({searchChange}) => {
  return (
    <div className = "pa2">
      <input className="bg-lightest-blue ba b--green ma2 pa3 "
      type="search"
      placeholder="search robots..."
      onChange={searchChange}/>
    </div>
  )
}

export default SearchBox;