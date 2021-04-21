import './styles.css'
import { Search, ArrowDown } from 'react-feather';

function MainContentArea () {
  return (
    <div className="main-content-area">
      <div className="search-and-filter d-flex p-2 justify-content-between position-sticky">
        <div className="position-relative">
          <input className="w-100" />
          <div className="position-absolute search-icon">
            <Search color="#41AF69" strokeWidth={2} />
          </div>
        </div>
        <button className="filter-btn d-flex align-items-center">Filters <ArrowDown height="20px" width="20px" /></button>
      </div>
    </div>
  )
}

export default MainContentArea;