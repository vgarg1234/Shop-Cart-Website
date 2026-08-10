import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const categories = [
  { icon: '/images/icons/dress.svg', title: 'Dress & frock', count: 53 },
  { icon: '/images/icons/coat.svg', title: 'Winter wear', count: 58 },
  { icon: '/images/icons/glasses.svg', title: 'Glasses & lens', count: 68 },
  { icon: '/images/icons/shorts.svg', title: 'Shorts & jeans', count: 84 },
  { icon: '/images/icons/tee.svg', title: 'T-shirts', count: 35 },
  { icon: '/images/icons/jacket.svg', title: 'Jacket', count: 16 },
  { icon: '/images/icons/watch.svg', title: 'Watch', count: 27 },
  { icon: '/images/icons/hat.svg', title: 'Hat & caps', count: 39 },
];

export default function Categories() {
  return (
    <Box sx={{ mb: 3 }}>
      <Container maxWidth="xl">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          breakpoints={{
            0:    { slidesPerView: 1, spaceBetween: 12 },
            480:  { slidesPerView: 2, spaceBetween: 12 },
            768:  { slidesPerView: 3, spaceBetween: 12 },
            1024: { slidesPerView: 4, spaceBetween: 16 },
            1280: { slidesPerView: 5, spaceBetween: 16 },
          }}
          style={{
            '--swiper-navigation-color': '#ff7171',
            '--swiper-navigation-size': '18px',
          }}
        >
          {categories.map((cat, i) => (
            <SwiperSlide key={i}>
              <Box sx={{
                display: 'flex', alignItems: 'center', gap: 1.5,
                p: 2, border: '1px solid #eee', borderRadius: 2, cursor: 'pointer',
                transition: '0.2s', '&:hover': { boxShadow: '0 2px 10px rgba(0,0,0,0.08)', borderColor: '#ff7171' },
              }}>
                <Box sx={{ bgcolor: '#f5f5f5', border: '1px solid #ccc', p: 1.5, borderRadius: 1, flexShrink: 0 }}>
                  <img src={cat.icon} alt={cat.title} style={{ width: 30, height: 30 }} />
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography fontSize={12} fontWeight={600} textTransform="uppercase">{cat.title}</Typography>
                    <Typography fontSize={11} color="text.secondary">({cat.count})</Typography>
                  </Box>
                  <Typography fontSize={12} color="#ff7171" fontWeight={500}>Show all</Typography>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
}




