
// import React from 'react';
// import { Container, Typography, Grid, Card, CardContent, CardMedia, Chip, Box, Rating } from '@mui/material';
// export default function Review() {

//     const venueData = {
//         rating: [
//           { id: 1, star: 5, date_time: "2024-09-14T07:36:56.862312Z", comment: "Perfect Destination" },
//           { id: 2, star: 3, date_time: "2024-09-16T10:33:34.216421Z", comment: "Good but could improve" },
//           { id: 3, star: 2, date_time: "2024-09-16T10:36:43.777586Z", comment: "Not satisfied" },
//           { id: 4, star: 5, date_time: "2024-09-14T07:36:56.862312Z", comment: "Perfect Destination" },
//           { id: 5, star: 3, date_time: "2024-09-16T10:33:34.216421Z", comment: "Good but could improve" },
//           { id: 6, star: 2, date_time: "2024-09-16T10:36:43.777586Z", comment: "Not satisfied" }
//         ]
//       };
//   return (
//     <>
//       <Box sx={{ mt: 4 }}>
//         <Typography variant="h5" gutterBottom>Reviews</Typography>
//         <Grid container spacing={3}>
//           {venueData.rating.map((review) => (
//             <Grid item xs={12} md={4} key={review.id}>
//               <Card variant="outlined">
//                 <CardContent>
//                   <Rating value={review.star} readOnly />
//                   <Typography variant="body1" gutterBottom>{review.comment}</Typography>
//                   <Typography variant="caption" color="textSecondary">{new Date(review.date_time).toLocaleDateString()}</Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>
//     </>
//   )
// }
import React from 'react';
import Slider from 'react-slick';
import { Container, Typography, Card, CardContent, Box, Rating } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Review() {
  const venueData = {
    rating: [
      { id: 1, star: 5, date_time: "2024-09-14T07:36:56.862312Z", comment: "Perfect Destination" },
      { id: 2, star: 3, date_time: "2024-09-16T10:33:34.216421Z", comment: "Good but could improve" },
      { id: 3, star: 2, date_time: "2024-09-16T10:36:43.777586Z", comment: "Not satisfied" },
      { id: 4, star: 5, date_time: "2024-09-14T07:36:56.862312Z", comment: "Perfect Destination" },
      { id: 5, star: 3, date_time: "2024-09-16T10:33:34.216421Z", comment: "Good but could improve" },
      { id: 6, star: 2, date_time: "2024-09-16T10:36:43.777586Z", comment: "Not satisfied" }
    ]
  };

  // Slider settings
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite looping of slides
    speed: 500, // Transition speed
    slidesToShow: 3, // Show 3 slides at once on larger screens
    slidesToScroll: 1, // Scroll one slide at a time
    responsive: [
      {
        breakpoint: 1024, // Tablets and smaller laptops
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // Mobile screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Box>
        <Typography variant="h5" gutterBottom>Reviews</Typography>
        <Slider {...settings}>
          {venueData.rating.map((review) => (
            <Box key={review.id} sx={{ px: 1 }}>
              <Card variant="outlined">
                <CardContent>
                  <Rating value={review.star} readOnly />
                  <Typography variant="body1" gutterBottom>{review.comment}</Typography>
                  <Typography variant="caption" color="textSecondary">
                    {new Date(review.date_time).toLocaleDateString()}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Slider>
      </Box>
    </Container>
  );
}
