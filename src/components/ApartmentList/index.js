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
                <img width="100%" height="300px" alt="apartment" src={item.imageUrl} />
                <div className="price-tag position-absolute w-100 px-3 py-2">
                  <div>{item.price}</div>
                  <div>{item.pricePerSqMtr}</div>
                </div>
              </div>
            </div>
            <div className="apartment-details">
              <div className="apartment-title p-2 text-primary border-bottom">
                {item.title}
              </div>
              <div className="row m-0 py-2 border-bottom">
                <div className="col-4 text-left border-right">
                  {item.sqMtr}
                </div>
                <div className="col-4 text-center border-right">
                  {item.bedCount} beds
                      </div>
                <div className="col-4 text-right">
                  {item.bathCount} bath
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