import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Chip, Box, Container } from '@mui/material';
import Review from "./Review";
import ImageCollection from './ImageCollection';
import CommentsSection from './CommentsSection';
// Sample Data
const destination = {
  id: 1,
  name: "Hotel",
  owner: 1,
  max_price: "1234.00",
  min_price: "232.00",
  max_capacity: 234,
  min_capacity: 23,
  room_availability: true,
  address: "dfdd232",
  image: "http://127.0.0.1:8000/api/api/media/destination_images/happy_republic__8a52f993-46c9-4cf8-a938-317f0b7b48a0.png"
};

const DestinationDetails = () => {
  return (
    <>
    <Container maxWidth="xl" sx={{ mt: 2 }}>
      <Card sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, boxShadow: 3, borderRadius: 2 }}>
        {/* Image Section */}
        <CardMedia
          component="img"
          sx={{ width: { xs: '100%', md: 400 }, height: { xs: 250, md: 'auto' }, objectFit: 'cover' }}
          image={destination.image}
          alt={destination.name}
        />

        {/* Details Section */}
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography variant="h4" component="div" gutterBottom>
            {destination.name}
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Address: {destination.address}
          </Typography>

          <Grid container spacing={2} sx={{ mt: 2 }}>
            {/* Price Range */}
            <Grid item xs={12} md={6}>
              <Typography variant="body2" color="textSecondary">
                Price Range:
              </Typography>
              <Typography variant="h6">
                ${destination.min_price} - ${destination.max_price}
              </Typography>
            </Grid>

            {/* Capacity */}
            <Grid item xs={12} md={6}>
              <Typography variant="body2" color="textSecondary">
                Capacity:
              </Typography>
              <Typography variant="h6">
                {destination.min_capacity} - {destination.max_capacity} people
              </Typography>
            </Grid>

            {/* Room Availability */}
            <Grid item xs={12}>
              <Chip
                label={destination.room_availability ? 'Rooms Available' : 'No Rooms Available'}
                color={destination.room_availability ? 'success' : 'error'}
                sx={{ mt: 2 }}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
    <CommentsSection/>
    <ImageCollection/>
    <Review/>
    </>
  );
};

export default DestinationDetails;
