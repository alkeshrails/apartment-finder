import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

function ApartmentList(props) {
  return (
    <div className="apartments" id="scrollable-div">
      <InfiniteScroll
        dataLength={props.data.length} //This is important field to render the next data
        next={props.fetchData}
        scrollableTarget="scrollable-div"
        hasMore={props.data.length !== props.tempData.length}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {props.data.map((item) => (
          <div key={item.id}>
            <div className="apartment mt-2">
              <div className="position-relative">
                <img width="100%" height="300px" alt="apartment" src={item.picture} />
                <div className="price-tag position-absolute w-100 px-3 py-2">
                  <div>{`${item.price} $`}</div>
                  <div>{`${Math.floor(item.price/item.sqm)} $/m^2`}</div>
                </div>
              </div>
            </div>
            <div className="apartment-details">
              <div className="apartment-title p-2 text-primary border-bottom fs-4 fw-500">
                {item.title}
              </div>
              <div className="row m-0 py-2 border-bottom">
                <div className="col-4 text-left border-right">
                  {`${item.sqm} m^2`}
                </div>
                <div className="col-4 text-center border-right">
                  {item.number_of_bedrooms} beds
                </div>
                <div className="col-4 text-right">
                  {item.number_of_bathrooms} bath
                </div>
              </div>
            </div>
          </div>
        ))}
      </InfiniteScroll>
    </div>
  )
}

export default ApartmentList;