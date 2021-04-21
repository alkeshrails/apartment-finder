import React, { useState } from 'react';
import ApartmentList from '../ApartmentList';
import SearchAndFilter from '../SearchAndFilter';
import Filters from '../Filters';
import './styles.css'

const tempData = [
  {
    id: 1,
    imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXBhcnRtZW50fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'This is testing title 1',
    bedCount: 1,
    bathCount: 2,
    price: '120.000 $',
    pricePerSqMtr: '2.718 $/m^2',
    sqMtr: '63 m^2',
  },
  {
    id: 2,
    imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXBhcnRtZW50fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'This is testing title 2',
    bedCount: 1,
    bathCount: 1,
    price: '240.000 $',
    pricePerSqMtr: '2.2 $/m^2',
    sqMtr: '113 m^2',
  },
  {
    id: 3,
    imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXBhcnRtZW50fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'This is testing title 3',
    bedCount: 2,
    bathCount: 3,
    price: '280.000 $',
    pricePerSqMtr: '2.718 $/m^2',
    sqMtr: '103 m^2',
  },
  {
    id: 4,
    imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXBhcnRtZW50fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'This is testing title 4',
    bedCount: 2,
    bathCount: 3,
    price: '280.000 $',
    pricePerSqMtr: '2.718 $/m^2',
    sqMtr: '103 m^2',
  },
  {
    id: 5,
    imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXBhcnRtZW50fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    title: 'This is testing title 5',
    bedCount: 2,
    bathCount: 3,
    price: '280.000 $',
    pricePerSqMtr: '2.718 $/m^2',
    sqMtr: '103 m^2',
  },
]
let initialFilters = { minPrice: '', maxPrice: '', minSqm: '', maxSqm: '',  bedrooms: ''};

function MainContentArea() {
  const [data, setData] = useState(tempData.slice(0, 4));
  const [filterStates, setFilterStates] = useState(initialFilters);
  const [search, setSearch] = useState('');
  const [openFilters, setOpenFilters] = useState(false);
  const [page, setPage] = useState(1);

  const fetchData = () => {
    setPage(page + 1);
    const max = (page + 1) * 4;
    setData(tempData.slice(0, max > tempData.length ? tempData.length : max));
  }
  
  const onFiltersClick = () => {
    if (openFilters) {
      setFilterStates(initialFilters);
    }
    setOpenFilters(!openFilters)
  }

  const onSaveClick = () => {
    initialFilters = {...initialFilters, ...filterStates};
    setOpenFilters(false);
  }

  return (
    <div className="main-content-area">
      <SearchAndFilter onFiltersClick={onFiltersClick} openFilters={openFilters} search={search} onSearchChange={(e) => setSearch(e.target.value)} />
      {openFilters ? (
        <Filters filterStates={filterStates} onSaveClick={onSaveClick} setFilterStates={setFilterStates} />
      ) : (
        <ApartmentList data={data} tempData={tempData} fetchData={fetchData} />
      )}
        </div>
      )
}

export default MainContentArea;