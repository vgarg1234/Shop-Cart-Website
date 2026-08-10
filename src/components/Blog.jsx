import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const blogs = [
  { img: '/images/blog-1.jpg', category: 'Fashion', title: 'Clothes Retail KPIs 2021 Guide for Clothes Executives.', author: 'Mr Admin', date: 'Apr 06, 2022' },
  { img: '/images/blog-2.jpg', category: 'Clothes', title: 'Curbside fashion Trends: How to Win the Pickup Battle.', author: 'Mr Robin', date: 'Jan 18, 2022' },
  { img: '/images/blog-3.jpg', category: 'Shoes', title: 'EBT vendors: Claim Your Share of SNAP Online Revenue.', author: 'Mr Selsa', date: 'Feb 10, 2022' },
  { img: '/images/blog-4.jpg', category: 'Electronics', title: 'Curbside fashion Trends: How to Win the Pickup Battle.', author: 'Mr Pawar', date: 'Mar 15, 2022' },
];

export default function Blog() {
  return (
    <Box sx={{ mb: 5 }}>
      <Container maxWidth="xl">
        <Typography fontSize={15} fontWeight={600} letterSpacing={0.4} textTransform="capitalize"
          pb={1} mb={3} borderBottom="1px solid #eee">
          Latest Blog
        </Typography>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          breakpoints={{
            0:    { slidesPerView: 1, spaceBetween: 16 },
            600:  { slidesPerView: 2, spaceBetween: 16 },
            900:  { slidesPerView: 3, spaceBetween: 20 },
            1200: { slidesPerView: 4, spaceBetween: 24 },
          }}
          style={{
            '--swiper-navigation-color': '#222',
            '--swiper-navigation-size': '18px',
            '--swiper-pagination-color': '#ff7171',
            '--swiper-pagination-bullet-inactive-color': '#ccc',
            paddingBottom: 36,
          }}
        >
          {blogs.map((b, i) => (
            <SwiperSlide key={i}>
              <Box sx={{ borderRadius: 2, overflow: 'hidden', mb: 1.5, cursor: 'pointer',
                '&:hover img': { transform: 'scale(1.05)' },
              }}>
                <img src={b.img} alt={b.title} style={{
                  width: '100%', height: 200, objectFit: 'cover',
                  display: 'block', transition: '0.3s',
                }} />
              </Box>
              <Typography fontSize={11} color="#ff7171" fontWeight={600} textTransform="uppercase" mb={0.5}>{b.category}</Typography>
              <Typography fontSize={13} fontWeight={600} lineHeight={1.4} mb={0.5}
                sx={{ cursor: 'pointer', '&:hover': { color: '#ff7171' }, transition: '0.2s' }}>
                {b.title}
              </Typography>
              <Typography fontSize={12} color="text.secondary">
                By <cite style={{ fontStyle: 'normal', color: '#555' }}>{b.author}</cite> / {b.date}
              </Typography>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
}
