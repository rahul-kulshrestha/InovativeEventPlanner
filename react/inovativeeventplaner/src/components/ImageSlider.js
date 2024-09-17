import React from 'react';
import Slider from 'react-slick';
import { Box, Container } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Sample data for images
const images = [
  { id: 1, url: 'http://127.0.0.1:8000/api/api/media/destination_images/happy_republic__8a52f993-46c9-4cf8-a938-317f0b7b48a0.png' },
  { id: 2, url: 'https://picsum.photos/800/450?random=2' },
  { id: 3, url: 'https://picsum.photos/800/450?random=450' },
  { id: 4, url: 'https://picsum.photos/800/450?random=6' },
  { id: 5, url: 'https://picsum.photos/800/450?random=45' }
];

const ImageSlider = () => {
  // Slider settings
  const settings = {
    dots: true, // Enable dots below the slider
    infinite: true, // Infinite scrolling of images
    speed: 500, // Transition speed in milliseconds
    slidesToShow: 1, // Show 1 image at a time
    slidesToScroll: 1, // Scroll 1 image at a time
    autoplay: true, // Enable auto slide
    autoplaySpeed: 3000, // Auto slide every 3 seconds
    responsive: [
      {
        breakpoint: 1024, // For tablets and small laptops
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // For mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box maxWidth="xl" sx={{ mt: 4 }}>
      <Slider {...settings}>
        {images.map((image) => (
          <Box key={image.id} sx={{ position: 'relative' }}>
            <img
              src={image.url}
              alt={`Slide ${image.id}`}
              style={{
                width: '100%',
                height: '400px',
                objectFit: 'cover',
                borderRadius: '8px',
              }}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ImageSlider;
