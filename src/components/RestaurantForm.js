import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate, useParams } from 'react-router-dom';
import { addRestaurant, getRestaurantById, updateRestaurant } from '../services/restaurantService';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import '../style.css';

const RestaurantForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = !!id;

  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      location: '',
      imageUrl: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      description: Yup.string().required('Required'),
      location: Yup.string().required('Required'),
    }),
    onSubmit: async (values) => {
      if (isEdit) {
        await updateRestaurant(id, values);
      } else {
        await addRestaurant(values);
      }
      navigate('/');
    },
  });

  React.useEffect(() => {
    if (isEdit) {
      getRestaurantById(id).then((data) => {
        formik.setValues(data);
      });
    }
  }, [id]);

  return (
    <form onSubmit={formik.handleSubmit} className="container">
      <TextField
        name="name"
        label="Name"
        onChange={formik.handleChange}
        value={formik.values.name}
        error={!!formik.errors.name}
        helperText={formik.errors.name}
        fullWidth
        margin="normal"
      />
      <TextField
        name="description"
        label="Description"
        onChange={formik.handleChange}
        value={formik.values.description}
        error={!!formik.errors.description}
        helperText={formik.errors.description}
        fullWidth
        margin="normal"
      />
      <TextField
        name="location"
        label="Location"
        onChange={formik.handleChange}
        value={formik.values.location}
        error={!!formik.errors.location}
        helperText={formik.errors.location}
        fullWidth
        margin="normal"
      />
      <TextField
        name="imageUrl"
        label="Image URL"
        onChange={formik.handleChange}
        value={formik.values.imageUrl}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary" style={{ marginTop: '16px' }}>
        {isEdit ? 'Update' : 'Add'} Restaurant
      </Button>
    </form>
  );
};

export default RestaurantForm;
