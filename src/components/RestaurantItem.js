import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const RestaurantItem = ({ restaurant, onDelete }) => {
  return (
    <Card className="restaurant-item">
      <CardMedia
        component="img"
        image={restaurant.imageUrl}
        alt={restaurant.name}
      />
      <CardContent>
        <Typography variant="h5">{restaurant.name}</Typography>
        <Typography variant="body2">{restaurant.description}</Typography>
        <Typography variant="body2">{restaurant.location}</Typography>
        <Link to={`/edit/${restaurant.id}`}>
          <Button variant="contained" color="primary" style={{ marginRight: '8px' }}>
            Edit
          </Button>
        </Link>
        <Button variant="contained" color="secondary" onClick={() => onDelete(restaurant.id)}>
          Delete
        </Button>
      </CardContent>
    </Card>
  );
};

export default RestaurantItem;
