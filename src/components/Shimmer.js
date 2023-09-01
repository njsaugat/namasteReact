import React from "react";

const Shimmer = () => {
  // let totalRestaurantsCollection = 20;
  let totalShimmerCollection = Array.from(
    { length: 20 },
    (_, index) => index + 1
  );
  return (
    <div className="restaurant-list">
      {totalShimmerCollection.map((ele) => {
        return (
          <div className="card">
            <div class="shimmerBG media"></div>
            <div class="p-32">
              <div class="shimmerBG title-line"></div>
              <div class="shimmerBG title-line end"></div>

              <div class="shimmerBG content-line m-t-24"></div>
              <div class="shimmerBG content-line"></div>
              <div class="shimmerBG content-line"></div>
              <div class="shimmerBG content-line"></div>
              <div class="shimmerBG content-line end"></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Shimmer;
