import React from 'react';
import { Search, ArrowDown, ArrowUp } from 'react-feather';

function SearchAndFilter(props) {
  return (
    <div className="search-and-filter d-flex p-2 justify-content-between position-sticky">
      <div className="position-relative">
        <input className="w-100" value={props.search} onChange={props.onSearchChange}  />
        <div className="position-absolute search-icon">
          <Search color="#41AF69" strokeWidth={2} />
        </div>
      </div>
      <button className="filter-btn d-flex align-items-center" onClick={props.onFiltersClick}>Filters {props.openFilters ? (<ArrowUp height="20px" width="20px" />) : (<ArrowDown height="20px" width="20px" />)}</button>
    </div>
  )
}

export default SearchAndFilter;