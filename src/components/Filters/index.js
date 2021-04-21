import React from 'react';

function Filters(props) {
  const { filterStates = {}} = props;
  return (
    <div className="mt-4">
      <div className="fs-4 text-center fw-500">
        Price
          </div>
      <div className="d-flex p-2 justify-content-around">
        <div>
          <div className="text-center">Min Price</div>
          <div>
            <select className="select" placeholder="min price" value={filterStates.minPrice} onChange={(e) => props.setFilterStates({ ...filterStates, minPrice: e.target.value })}>
              <option value={0} disabled={filterStates.maxPrice && filterStates.maxPrice < 0}>0$</option>
              <option value={100} disabled={filterStates.maxPrice && filterStates.maxPrice < 100}>100$</option>
              <option value={200} disabled={filterStates.maxPrice && filterStates.maxPrice < 200}>200$</option>
              <option value={300} disabled={filterStates.maxPrice && filterStates.maxPrice < 300}>300$</option>
            </select>
          </div>
        </div>
        <div>
          <div className="text-center">Max Price</div>
          <div>
            <select className="select" placeholder="max price" value={filterStates.maxPrice} onChange={(e) => props.setFilterStates({ ...filterStates, maxPrice: e.target.value })}>
              <option value={100} disabled={filterStates.minPrice && filterStates.minPrice > 100}>100$</option>
              <option value={200} disabled={filterStates.minPrice && filterStates.minPrice > 200}>200$</option>
              <option value={300} disabled={filterStates.minPrice && filterStates.minPrice > 300}>300$</option>
              <option value=''>300$+</option>
            </select>
          </div>
        </div>
      </div>
      <div className="fs-4 text-center fw-500 mt-1">
        Sq meter
          </div>
      <div className="d-flex p-3 justify-content-around">
        <div>
          <div className="text-center">Min sqm</div>
          <div>
            <select className="select" placeholder="min price" value={filterStates.minSqm} onChange={(e) => props.setFilterStates({ ...filterStates, minSqm: e.target.value })}>
              <option value={0} disabled={filterStates.maxSqm && filterStates.maxSqm < 0}>0</option>
              <option value={100} disabled={filterStates.maxSqm && filterStates.maxSqm < 100}>100</option>
              <option value={200} disabled={filterStates.maxSqm && filterStates.maxSqm < 200}>200</option>
              <option value={300} disabled={filterStates.maxSqm && filterStates.maxSqm < 300}>300</option>
            </select>
          </div>
        </div>
        <div>
          <div className="text-center">Max sqm</div>
          <div>
            <select className="select" placeholder="max price" value={filterStates.maxSqm} onChange={(e) => props.setFilterStates({ ...filterStates, maxSqm: e.target.value })}>
              <option value={100} disabled={filterStates.minSqm && filterStates.minSqm > 100}>100</option>
              <option value={200} disabled={filterStates.minSqm && filterStates.minSqm > 200}>200</option>
              <option value={300} disabled={filterStates.minSqm && filterStates.minSqm > 300}>300</option>
              <option value=''>300+</option>
            </select>
          </div>
        </div>
      </div>
      <div className="fs-4 text-center fw-500">
        No. of Bedrooms
          </div>
      <div className="d-flex border mx-3">
        <div className={`border-right cursor-pointer flex-fill p-3 ${filterStates.bedrooms === '' && 'bed-active'}`} onClick={() => props.setFilterStates({ ...filterStates, bedrooms: '' })}>Todos</div>
        <div className={`border-right cursor-pointer flex-fill p-3 ${filterStates.bedrooms === 1 && 'bed-active'}`} onClick={() => props.setFilterStates({ ...filterStates, bedrooms: 1 })}>1+</div>
        <div className={`border-right cursor-pointer flex-fill p-3 ${filterStates.bedrooms === 2 && 'bed-active'}`} onClick={() => props.setFilterStates({ ...filterStates, bedrooms: 2 })}>2+</div>
        <div className={`border-right cursor-pointer flex-fill p-3 ${filterStates.bedrooms === 3 && 'bed-active'}`} onClick={() => props.setFilterStates({ ...filterStates, bedrooms: 3 })}>3+</div>
        <div className={`border-right cursor-pointer flex-fill p-3 ${filterStates.bedrooms === 4 && 'bed-active'}`} onClick={() => props.setFilterStates({ ...filterStates, bedrooms: 4 })}>4+</div>
        <div className={`p-3 flex-fill cursor-pointer ${filterStates.bedrooms === 5 && 'bed-active'}`} onClick={() => props.setFilterStates({ ...filterStates, bedrooms: 5 })}>5+</div>
      </div>
      <div className="text-center mt-5">
        <button className="w-75 p-2 filter-save-btn border-0 cursor-pointer" onClick={props.onSaveClick}>Save Filters</button>
      </div>
    </div>
  )
}

export default Filters;