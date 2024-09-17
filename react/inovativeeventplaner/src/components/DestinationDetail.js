import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Chip, Box, Rating } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Review from './Review';

const venueData = {
  id: 1,
  name: "Hotel",
  owner: 1,
  max_price: "1234.00",
  min_price: "232.00",
  max_capacity: 234,
  min_capacity: 23,
  room_availability: true,
  address: "dfdd232",
  rating: [
    { id: 1, star: 5, date_time: "2024-09-14T07:36:56.862312Z", comment: "Perfect Destination" },
    { id: 2, star: 3, date_time: "2024-09-16T10:33:34.216421Z", comment: "Good but could improve" },
    { id: 3, star: 2, date_time: "2024-09-16T10:36:43.777586Z", comment: "Not satisfied" }
  ],
  image: [
    { id: 1, image: "http://127.0.0.1:8000/api/api/media/destination_images/happy_republic__8a52f993-46c9-4cf8-a938-317f0b7b48a0.png" },
    { id: 2, image: "http://127.0.0.1:8000/api/api/media/destination_images/original-f6aa71c9cba938fa7fd85beb3caf1b0d.jpg" }
  ]
};

const VenueDetailPage = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      {/* Venue Title and Details */}
      <Grid container spacing={4}>
        {/* Venue Images */}
        <Grid item xs={12} md={6}>
          <ImageList sx={{ width: '100%', height: 450 }} cols={2} rowHeight={220}>
            {venueData.image.map((img) => (
              <ImageListItem key={img.id}>
                <img src={img.image} alt={`Venue Image ${img.id}`} loading="lazy" style={{ width: '100%', height: '100%' }} />
              </ImageListItem>
            ))}
          </ImageList>
        </Grid>

        {/* Venue Info */}
        <Grid item xs={12} md={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h4" gutterBottom>{venueData.name}</Typography>
              <Typography variant="body1" color="textSecondary" gutterBottom>Address: {venueData.address}</Typography>
              <Typography variant="body2" color="textSecondary">Owner ID: {venueData.owner}</Typography>
              <Typography variant="body1">Price Range: ${venueData.min_price} - ${venueData.max_price}</Typography>
              <Typography variant="body1">Capacity: {venueData.min_capacity} - {venueData.max_capacity} people</Typography>
              <Chip label={venueData.room_availability ? "Rooms Available" : "No Rooms Available"} color={venueData.room_availability ? "success" : "error"} sx={{ mt: 2 }} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Ratings and Reviews */}
      {/* <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>Reviews</Typography>
        <Grid container spacing={3}>
          {venueData.rating.map((review) => (
            <Grid item xs={12} md={4} key={review.id}>
              <Card variant="outlined">
                <CardContent>
                  <Rating value={review.star} readOnly />
                  <Typography variant="body1" gutterBottom>{review.comment}</Typography>
                  <Typography variant="caption" color="textSecondary">{new Date(review.date_time).toLocaleDateString()}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box> */}
      <Review/>
    </Container>
  );
};

export default VenueDetailPage;
