import React from 'react';
import { Box, Typography, Card, CardMedia, Container } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Sample images array
const images = [
  "https://picsum.photos/800/450?random=451",
  "https://picsum.photos/800/450?random=452",
  "https://picsum.photos/800/450?random=453",
  "https://picsum.photos/800/450?random=454",
  "https://picsum.photos/800/450?random=455",
  "https://picsum.photos/800/450?random=456",
  "https://picsum.photos/800/450?random=457",
]
const ImageCollection = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3, // Number of images to show at a time
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Tablet
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // Mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Image
      </Typography>
      
      <Slider {...settings}>
        {images.map((image, index) => (
          <Box key={index} px={2}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={image}
                alt={`Image ${index + 1}`}
                sx={{ objectFit: 'cover' }}
              />
            </Card>
          </Box>
        ))}
      </Slider>
    </Container>
  );
};

export default ImageCollection;
