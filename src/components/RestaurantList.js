import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getRestaurants, deleteRestaurant } from '../services/restaurantService';
import RestaurantItem from './RestaurantItem';
import Button from '@mui/material/Button';

import '../style.css';

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    const data = await getRestaurants();
    setRestaurants(data);
  };

  const handleDelete = async (id) => {
    await deleteRestaurant(id);
    fetchRestaurants();
  };

  return (
    <div className="container">
      {restaurants.map((restaurant) => (
        <RestaurantItem key={restaurant.id} restaurant={restaurant} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default RestaurantList;
