import restaurantsData from '../data/restaurants.json'

let restaurants = [...restaurantsData];

export const getRestaurants = () => {
  return new Promise((resolve) => {
    resolve(restaurants);
  });
};

export const getRestaurantById = (id) => {
  return new Promise((resolve) => {
    const restaurant = restaurants.find((r) => r.id === parseInt(id, 10));
    resolve(restaurant);
  });
};

export const addRestaurant = (restaurant) => {
  return new Promise((resolve) => {
    const newRestaurant = { ...restaurant, id: Date.now() };
    restaurants.push(newRestaurant);
    resolve(newRestaurant);
  });
};

export const updateRestaurant = (id, updatedRestaurant) => {
  return new Promise((resolve) => {
    restaurants = restaurants.map((r) =>
      r.id === parseInt(id, 10) ? { ...r, ...updatedRestaurant } : r
    );
    resolve();
  });
};

export const deleteRestaurant = (id) => {
  return new Promise((resolve) => {
    restaurants = restaurants.filter((r) => r.id !== parseInt(id, 10));
    resolve();
  });
};
