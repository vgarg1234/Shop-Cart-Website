import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, LinearProgress, IconButton, Modal, Chip, Divider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarBorder';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const deals = [
  { imgs: ['/images/products/shampoo.jpg'], title: 'Shampoo, Conditioner & Facewash Packs', category: 'Cosmetics', desc: 'Complete hair and face care combo pack for daily grooming routine.', price: 150, oldPrice: 200, sold: 20, available: 40, stars: 3 },
  { imgs: ['/images/products/jewellery-1.jpg'], title: 'Rose Gold Diamonds Earring', category: 'Jewellery', desc: 'Stunning rose gold diamond earrings crafted for elegance and style.', price: 1990, oldPrice: 2000, sold: 15, available: 40, stars: 4 },
  { imgs: ['/images/products/watch-1.jpg'], title: 'Smart Watch Vital Plus', category: 'Watches', desc: 'Feature-rich smartwatch with health tracking and notifications.', price: 100, oldPrice: 120, sold: 30, available: 50, stars: 4 },
  { imgs: ['/images/products/perfume.jpg'], title: 'Titan 100 Ml Womens Perfume', category: 'Perfume', desc: 'Long-lasting floral fragrance perfect for everyday wear.', price: 42, oldPrice: 60, sold: 25, available: 35, stars: 5 },
];

const swiperStyle = {
  '--swiper-navigation-color': '#222',
  '--swiper-navigation-size': '18px',
  '--swiper-pagination-color': '#ff7171',
  '--swiper-pagination-bullet-inactive-color': '#ccc',
  paddingBottom: 40,
  paddingLeft: 4,
  paddingRight: 4,
};

const breakpoints = {
  0:    { slidesPerView: 1, spaceBetween: 16 },
  600:  { slidesPerView: 2, spaceBetween: 16 },
  900:  { slidesPerView: 3, spaceBetween: 20 },
  1200: { slidesPerView: 4, spaceBetween: 24 },
};

function Stars({ count }) {
  return (
    <Box sx={{ display: 'flex', color: '#f0a500' }}>
      {[1,2,3,4,5].map(i => i <= count
        ? <StarIcon key={i} sx={{ fontSize: 13 }} />
        : <StarOutlineIcon key={i} sx={{ fontSize: 13 }} />
      )}
    </Box>
  );
}

function Countdown() {
  const [time, setTime] = useState({ d: 360, h: 24, m: 59, s: 0 });
  useEffect(() => {
    const t = setInterval(() => {
      setTime(prev => {
        let { d, h, m, s } = prev;
        s--; if (s < 0) { s = 59; m--; } if (m < 0) { m = 59; h--; } if (h < 0) { h = 23; d--; }
        return { d, h, m, s };
      });
    }, 1000);
    return () => clearInterval(t);
  }, []);
  return (
    <Box sx={{ display: 'flex', gap: 0.8, mt: 1 }}>
      {[{ v: time.d, l: 'Days' }, { v: time.h, l: 'Hrs' }, { v: time.m, l: 'Min' }, { v: time.s, l: 'Sec' }].map(({ v, l }) => (
        <Box key={l} sx={{ bgcolor: '#f5f5f5', borderRadius: 1.5, p: '6px 8px', textAlign: 'center', minWidth: 44 }}>
          <Typography fontSize={13} fontWeight={600}>{String(v).padStart(2, '0')}</Typography>
          <Typography fontSize={9} color="text.secondary">{l}</Typography>
        </Box>
      ))}
    </Box>
  );
}

function DealModal({ p, open, onClose }) {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%,-50%)',
        bgcolor: 'white', borderRadius: 2, outline: 'none',
        width: { xs: '92%', sm: 600, md: 750 }, maxHeight: '90vh', overflow: 'auto',
      }}>
        <IconButton onClick={onClose} size="small" sx={{
          position: 'absolute', top: 10, right: 10, zIndex: 10,
          bgcolor: '#ff7171', color: 'white', '&:hover': { bgcolor: '#ff5555' },
        }}>
          <CloseIcon fontSize="small" />
        </IconButton>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' } }}>
          <Box sx={{ width: { xs: '100%', sm: 280 }, flexShrink: 0 }}>
            <Swiper modules={[Navigation, Pagination]} navigation pagination={{ clickable: true }}>
              {p.imgs.map((img, i) => (
                <SwiperSlide key={i}>
                  <img src={img} alt={p.title} style={{ width: '100%', height: 280, objectFit: 'cover', display: 'block' }} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
          <Box sx={{ p: 3, flex: 1 }}>
            <Typography fontSize={11} color="#ff7171" fontWeight={600} textTransform="uppercase" mb={0.5}>{p.category}</Typography>
            <Typography fontSize={16} fontWeight={700} textTransform="capitalize" mb={1}>{p.title}</Typography>
            <Stars count={p.stars} />
            <Divider sx={{ my: 1.5 }} />
            <Typography fontSize={13} color="text.secondary" mb={2}>{p.desc}</Typography>
            <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center', mb: 1.5 }}>
              <Typography fontSize={22} fontWeight={800} color="#ff7171">${p.price}.00</Typography>
              <Typography component="del" fontSize={16} color="text.secondary">${p.oldPrice}.00</Typography>
              <Chip label={`Save $${p.oldPrice - p.price}`} size="small" sx={{ bgcolor: '#f0faf5', color: '#4caf7d', fontWeight: 700, fontSize: 11 }} />
            </Box>
            <Box sx={{ mb: 2 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.8 }}>
                <Typography fontSize={11} textTransform="uppercase">Sold: <b>{p.sold}</b></Typography>
                <Typography fontSize={11} textTransform="uppercase">Available: <b>{p.available}</b></Typography>
              </Box>
              <LinearProgress variant="determinate" value={(p.sold / (p.sold + p.available)) * 100}
                sx={{ height: 8, borderRadius: 5, bgcolor: '#eee', '& .MuiLinearProgress-bar': { bgcolor: '#ff7171' } }} />
            </Box>
            <Typography fontSize={11} fontWeight={600} textTransform="uppercase" mb={0.5}>Hurry Up! Offer ends in:</Typography>
            <Countdown />
            <Box sx={{ display: 'flex', gap: 1.5, mt: 2 }}>
              <Button variant="contained" startIcon={<AddShoppingCartIcon />} sx={{ bgcolor: '#222', '&:hover': { bgcolor: '#ff7171' }, fontWeight: 700, fontSize: 12, flex: 1 }}>
                Add to Cart
              </Button>
              <IconButton sx={{ border: '1px solid #eee', '&:hover': { bgcolor: '#ff7171', color: 'white', borderColor: '#ff7171' } }}>
                <FavoriteBorderIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}

function DealCard({ p }) {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <Box sx={{
        border: '1px solid #eee', borderRadius: 2, overflow: 'hidden',
        display: 'flex', flexDirection: 'column', height: '100%',
        transition: '0.2s', '&:hover': { boxShadow: '0 4px 16px rgba(0,0,0,0.08)' },
      }}>
        {/* Image */}
        <Box sx={{ position: 'relative', flexShrink: 0,
          '&:hover .zoom-img': { transform: 'scale(1.05)' },
        }}>
          <Swiper modules={[Pagination, Autoplay]} pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            style={{ '--swiper-pagination-color': '#ff7171', '--swiper-pagination-bullet-inactive-color': 'rgba(255,255,255,0.6)' }}>
            {p.imgs.map((img, i) => (
              <SwiperSlide key={i}>
                <img className="zoom-img" src={img} alt={p.title} style={{ width: '100%', height: 180, objectFit: 'cover', display: 'block', transition: '0.3s' }} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>

        {/* Content */}
        <Box sx={{ p: 1.5, display: 'flex', flexDirection: 'column', flex: 1 }}>
          <Typography fontSize={11} color="#ff7171" fontWeight={600} textTransform="uppercase" mb={0.3}>{p.category}</Typography>
          <Typography fontSize={12} fontWeight={600} lineHeight={1.4} mb={0.4}
            sx={{ cursor: 'pointer', '&:hover': { color: '#ff7171' }, transition: '0.2s' }}>
            {p.title}
          </Typography>
          <Stars count={p.stars} />
          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', mt: 0.5, mb: 0.8 }}>
            <Typography fontSize={13} fontWeight={800} color="#ff7171">${p.price}.00</Typography>
            <Typography component="del" fontSize={11} color="text.secondary">${p.oldPrice}.00</Typography>
          </Box>
          <Box sx={{ mb: 0.8 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.4 }}>
              <Typography fontSize={10} textTransform="uppercase" color="text.secondary">Sold: <b>{p.sold}</b></Typography>
              <Typography fontSize={10} textTransform="uppercase" color="text.secondary">Left: <b>{p.available}</b></Typography>
            </Box>
            <LinearProgress variant="determinate" value={(p.sold / (p.sold + p.available)) * 100}
              sx={{ height: 5, borderRadius: 5, bgcolor: '#eee', '& .MuiLinearProgress-bar': { bgcolor: '#ff7171' } }} />
          </Box>
          <Typography fontSize={10} fontWeight={600} textTransform="uppercase" color="text.secondary">Offer ends in:</Typography>
          <Countdown />
          <Box sx={{ display: 'flex', gap: 1, mt: 1.2 }}>
            <Button variant="contained" size="small" startIcon={<AddShoppingCartIcon sx={{ fontSize: '12px !important' }} />}
              sx={{ bgcolor: '#222', '&:hover': { bgcolor: '#ff7171' }, fontWeight: 700, fontSize: 10, flex: 1, py: 0.6 }}>
              Add to Cart
            </Button>
            <Button variant="outlined" size="small" onClick={() => setModalOpen(true)}
              sx={{ borderColor: '#ddd', color: '#222', '&:hover': { borderColor: '#ff7171', color: '#ff7171', bgcolor: 'transparent' }, fontSize: 10, fontWeight: 600, px: 1 }}>
              Details
            </Button>
          </Box>
        </Box>
      </Box>
      <DealModal p={p} open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}

export default function ProductFeatured() {
  return (
    <Box sx={{ mb: 3 }}>
      <Typography fontSize={15} fontWeight={600} letterSpacing={0.4} textTransform="capitalize"
        pb={1} mb={3} borderBottom="1px solid #eee">
        Deal of the Day
      </Typography>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        loop
        breakpoints={breakpoints}
        style={{ ...swiperStyle, alignItems: 'stretch' }}
      >
        {deals.map((p, i) => (
          <SwiperSlide key={i} style={{ height: 'auto' }}>
            <DealCard p={p} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
