
import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Chip, Box, Rating } from '@mui/material';
export default function Review() {

    const venueData = {
        rating: [
          { id: 1, star: 5, date_time: "2024-09-14T07:36:56.862312Z", comment: "Perfect Destination" },
          { id: 2, star: 3, date_time: "2024-09-16T10:33:34.216421Z", comment: "Good but could improve" },
          { id: 3, star: 2, date_time: "2024-09-16T10:36:43.777586Z", comment: "Not satisfied" }
        ]
      };
  return (
    <>
      <Box sx={{ mt: 4 }}>
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
      </Box>
    </>
  )
}
