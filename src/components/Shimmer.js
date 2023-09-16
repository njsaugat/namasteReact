import React from "react";

const Shimmer = () => {
  // let totalRestaurantsCollection = 20;
  let totalShimmerCollection = Array(20).fill("");
  return (
    <div className="restaurant-list" data-testid="shimmer">
      {totalShimmerCollection.map((ele, index) => {
        return (
          <div className="card" key={index}>
            <div className="shimmerBG media"></div>
            <div className="p-32">
              <div className="shimmerBG title-line"></div>
              <div className="shimmerBG title-line end"></div>

              <div className="shimmerBG content-line m-t-24"></div>
              <div className="shimmerBG content-line"></div>
              <div className="shimmerBG content-line"></div>
              <div className="shimmerBG content-line"></div>
              <div className="shimmerBG content-line end"></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Shimmer;

