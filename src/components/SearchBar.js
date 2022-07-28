import React from "react";

function SearchBar({ setSearchTerm, setIsSearchByAge}) {
  return (
    <div className="search">
      <input
        type="text"
        className="searchTerm"
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <label htmlFor="checkbox">Sort by age</label>
      <input type="checkbox" id="checkbox" onChange={()=> {setIsSearchByAge(prev => !prev)}} />
    </div>
  );
}

export default SearchBar;
