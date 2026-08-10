import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const banners = [
  { img: '/images/banner-1.jpg', subtitle: 'Trending item', title: "Women's latest fashion sale", price: 20 },
  { img: '/images/banner-2.jpg', subtitle: 'Trending accessories', title: 'Modern sunglasses', price: 15 },
  { img: '/images/banner-3.jpg', subtitle: 'Sale Offer', title: 'New fashion summer sale', price: 29.99 },
];

export default function Banner() {
  return (
    <Box sx={{ my: 3 }}>
      <Container maxWidth="xl">
        <Box sx={{ borderRadius: 2, overflow: 'hidden' }}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop
            style={{
              '--swiper-navigation-color': '#fff',
              '--swiper-pagination-color': '#ff7171',
              '--swiper-pagination-bullet-inactive-color': 'rgba(255,255,255,0.6)',
              '--swiper-pagination-bullet-inactive-opacity': '1',
            }}
          >
            {banners.map((b, i) => (
              <SwiperSlide key={i}>
                <Box sx={{
                  position: 'relative',
                  height: { xs: 250, sm: 320, md: 380, lg: 450 },
                }}>
                  <img src={b.img} alt={b.title} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'right', display: 'block' }} />
                  <Box sx={{
                    position: 'absolute',
                    top: { xs: 'auto', sm: '50%' },
                    bottom: { xs: 20, sm: 'auto' },
                    left: { xs: 20, sm: 50, lg: 110 },
                    right: { xs: 20, sm: 'auto' },
                    transform: { sm: 'translateY(-50%)' },
                    bgcolor: { xs: 'rgba(255,255,255,0.88)', sm: 'transparent' },
                    p: { xs: 2, sm: 0 },
                    borderRadius: 2,
                    maxWidth: { sm: 400, lg: 460 },
                  }}>
                    <Typography sx={{ color: '#ff7171', fontSize: { xs: 12, sm: 14, lg: 18 }, fontWeight: 500, letterSpacing: 2, mb: 1, textTransform: 'capitalize' }}>
                      {b.subtitle}
                    </Typography>
                    <Typography variant="h4" sx={{ fontWeight: 700, textTransform: 'uppercase', lineHeight: 1, mb: 1, fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem', lg: '2.5rem' } }}>
                      {b.title}
                    </Typography>
                    <Typography sx={{ display: { xs: 'none', sm: 'block' }, color: '#666', mb: 1.5, fontSize: { sm: 14, lg: 16 } }}>
                      starting at $ <b style={{ fontSize: '1.2em' }}>{b.price}</b>.00
                    </Typography>
                    <Button variant="contained" sx={{ bgcolor: '#ff7171', '&:hover': { bgcolor: '#222' }, fontSize: { xs: 11, sm: 13 }, px: { xs: 1.5, sm: 2.5 }, py: { xs: 0.5, sm: 1 } }}>
                      Shop now
                    </Button>
                  </Box>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Container>
    </Box>
  );
}
