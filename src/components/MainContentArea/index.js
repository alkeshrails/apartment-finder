import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import ApartmentList from '../ApartmentList';
import SearchAndFilter from '../SearchAndFilter';
import Filters from '../Filters';
import './styles.css'

let initialFilters = { minPrice: '', maxPrice: '', minSqm: '', maxSqm: '',  bedrooms: ''};

function MainContentArea() {
  const [fetchedData, setFetchedData] = useState([]);
  const [data, setData] = useState(fetchedData);
  const [filterStates, setFilterStates] = useState(initialFilters);
  const [search, setSearch] = useState('');
  const [openFilters, setOpenFilters] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch('https://apartment-search-api.herokuapp.com/api/v1/apartments/')
      .then((res) => {
        res.json().then(response => setFetchedData(response)).catch(e => console.log(e));
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    setPage(1);
    setData(fetchedData.slice(0, 4 > fetchedData.length ? fetchedData.length : 4));
  }, [fetchedData])

  const fetchData = () => {
    setPage(page + 1);
    const max = (page + 1) * 4;
    setData(fetchedData.slice(0, max > fetchedData.length ? fetchedData.length : max));
  }
  
  const onFiltersClick = () => {
    if (openFilters) {
      setFilterStates(initialFilters);
    }
    setOpenFilters(!openFilters)
  }

  const onSaveClick = () => {
    initialFilters = {...initialFilters, ...filterStates};
    const queryItems = {
      ...(filterStates.minPrice && {min_price: filterStates.minPrice}),
      ...(filterStates.maxPrice && {max_price: filterStates.maxPrice}),
      ...(filterStates.minSqm && {min_sqm: filterStates.minSqm}),
      ...(filterStates.maxSqm && {max_sqm: filterStates.maxSqm}),
      ...(filterStates.bedrooms && {number_of_bedrooms: filterStates.bedrooms}),
    }
    fetch(`https://apartment-search-api.herokuapp.com/api/v1/apartments/?${queryString.stringify(queryItems)}`)
      .then((res) => {
        res.json().then(response => setFetchedData(response)).catch(e => console.log(e));
      })
      .catch(err => console.log(err));
    setOpenFilters(false);
  }

  return (
    <div className="main-content-area">
      <SearchAndFilter onFiltersClick={onFiltersClick} openFilters={openFilters} search={search} onSearchChange={(e) => setSearch(e.target.value)} />
      {openFilters ? (
        <Filters filterStates={filterStates} onSaveClick={onSaveClick} setFilterStates={setFilterStates} />
      ) : (
        <ApartmentList data={data} tempData={fetchedData} fetchData={fetchData} />
      )}
        </div>
      )
}

export default MainContentArea;