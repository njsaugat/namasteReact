const filterData = (allRestaurantList, searchText) => {
  return allRestaurantList.filter((restaurantData) => {
    return restaurantData.info.name
      .toLowerCase()
      .includes(searchText?.toLowerCase());
  });
};

export default filterData;