import React, { useState } from 'react';
import { Box, Typography, IconButton, Modal, Button, Chip, Divider } from '@mui/material';
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

const products = [
  { imgs: ['/images/products/jacket-3.jpg', '/images/products/jacket-4.jpg'], badge: '15%', badgeType: 'green', category: 'Jacket', title: 'Mens Winter Leathers Jackets', price: 48, oldPrice: 75, stars: 3, desc: 'Premium leather jacket with warm inner lining, perfect for winter.' },
  { imgs: ['/images/products/shirt-1.jpg', '/images/products/shirt-2.jpg'], badge: 'sale', badgeType: 'black', category: 'Shirt', title: 'Pure Garment Dyed Cotton Shirt', price: 45, oldPrice: 56, stars: 3, desc: 'Soft garment-dyed cotton shirt with a relaxed modern fit.' },
  { imgs: ['/images/products/jacket-5.jpg', '/images/products/jacket-6.jpg'], category: 'Jacket', title: 'MEN Yarn Fleece Full-Zip Jacket', price: 58, oldPrice: 65, stars: 3, desc: 'Cozy fleece full-zip jacket ideal for outdoor activities.' },
  { imgs: ['/images/products/clothes-3.jpg', '/images/products/clothes-4.jpg'], badge: 'new', badgeType: 'pink', category: 'Skirt', title: 'Black Floral Wrap Midi Skirt', price: 25, oldPrice: 35, stars: 5, desc: 'Elegant floral wrap midi skirt with a flattering silhouette.' },
  { imgs: ['/images/products/shoe-2.jpg', '/images/products/shoe-2_1.jpg'], category: 'Casual', title: "Casual Men's Brown Shoes", price: 99, oldPrice: 105, stars: 5, desc: 'Stylish casual brown shoes crafted from genuine leather.' },
  { imgs: ['/images/products/watch-3.jpg', '/images/products/watch-4.jpg'], badge: 'sale', badgeType: 'black', category: 'Watches', title: 'Pocket Watch Leather Pouch', price: 150, oldPrice: 170, stars: 3, desc: 'Classic pocket watch with a handcrafted leather pouch.' },
  { imgs: ['/images/products/watch-1.jpg', '/images/products/watch-2.jpg'], category: 'Watches', title: 'Smart Watch Vital Plus', price: 100, oldPrice: 120, stars: 4, desc: 'Feature-rich smartwatch with health tracking and notifications.' },
  { imgs: ['/images/products/party-wear-1.jpg', '/images/products/party-wear-2.jpg'], badge: 'sale', badgeType: 'black', category: 'Party Wear', title: 'Womens Party Wear Shoes', price: 25, oldPrice: 30, stars: 3, desc: 'Glamorous party wear shoes with a comfortable heel design.' },
  { imgs: ['/images/products/jacket-1.jpg', '/images/products/jacket-2.jpg'], category: 'Jacket', title: 'Mens Winter Leathers Jackets', price: 32, oldPrice: 45, stars: 4, desc: 'Durable winter jacket with quilted lining and zip pockets.' },
  { imgs: ['/images/products/sports-2.jpg', '/images/products/sports-4.jpg'], badge: 'sale', badgeType: 'black', category: 'Sports', title: 'Trekking & Running Shoes - Black', price: 58, oldPrice: 64, stars: 3, desc: 'High-grip trekking shoes built for trails and long runs.' },
  { imgs: ['/images/products/shoe-1.jpg', '/images/products/shoe-1_1.jpg'], category: 'Formal', title: "Men's Leather Formal Wear Shoes", price: 50, oldPrice: 65, stars: 4, desc: 'Polished formal leather shoes for office and events.' },
  { imgs: ['/images/products/shorts-1.jpg', '/images/products/shorts-2.jpg'], badge: 'sale', badgeType: 'black', category: 'Shorts', title: 'Better Basics French Terry Sweatshorts', price: 78, oldPrice: 85, stars: 3, desc: 'Ultra-soft French terry sweatshorts for everyday comfort.' },
];

const swiperStyle = {
  '--swiper-navigation-color': '#222',
  '--swiper-navigation-size': '18px',
  '--swiper-pagination-color': '#ff7171',
  '--swiper-pagination-bullet-inactive-color': '#ccc',
  paddingBottom: 36,
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

function ProductModal({ p, open, onClose }) {
  const badgeColor = p.badgeType === 'black' ? '#222' : p.badgeType === 'pink' ? '#ff7171' : '#4caf7d';
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
            {p.badge && (
              <Chip label={p.badge.toUpperCase()} size="small" sx={{ mb: 1.5, bgcolor: badgeColor, color: 'white', fontWeight: 700, fontSize: 10 }} />
            )}
            <Typography fontSize={11} color="#ff7171" fontWeight={600} textTransform="uppercase" mb={0.5}>{p.category}</Typography>
            <Typography fontSize={16} fontWeight={700} textTransform="capitalize" mb={1}>{p.title}</Typography>
            <Stars count={p.stars} />
            <Divider sx={{ my: 1.5 }} />
            <Typography fontSize={13} color="text.secondary" mb={2}>{p.desc}</Typography>
            <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center', mb: 2.5 }}>
              <Typography fontSize={22} fontWeight={800} color="#ff7171">${p.price}.00</Typography>
              <Typography component="del" fontSize={16} color="text.secondary">${p.oldPrice}.00</Typography>
              <Chip label={`Save $${p.oldPrice - p.price}`} size="small" sx={{ bgcolor: '#f0faf5', color: '#4caf7d', fontWeight: 700, fontSize: 11 }} />
            </Box>
            <Box sx={{ display: 'flex', gap: 1.5 }}>
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

function ProductCard({ p }) {
  const [modalOpen, setModalOpen] = useState(false);
  const badgeColor = p.badgeType === 'black' ? '#222' : p.badgeType === 'pink' ? '#ff7171' : '#4caf7d';

  return (
    <>
      {/* Image with inner swiper — same style as blog image box */}
      <Box sx={{ borderRadius: 2, overflow: 'hidden', mb: 1.5, cursor: 'pointer', position: 'relative',
        '&:hover .zoom-img': { transform: 'scale(1.05)' },
      }}>
        {p.badge && (
          <Box sx={{ position: 'absolute', top: 10, left: 10, bgcolor: badgeColor, color: 'white', fontSize: 10, fontWeight: 700, px: 1, py: 0.3, borderRadius: 1, zIndex: 10, textTransform: 'uppercase' }}>
            {p.badge}
          </Box>
        )}
        <Swiper modules={[Pagination, Autoplay]} pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          style={{ '--swiper-pagination-color': '#ff7171', '--swiper-pagination-bullet-inactive-color': 'rgba(255,255,255,0.6)' }}>
          {p.imgs.map((img, i) => (
            <SwiperSlide key={i}>
              <img className="zoom-img" src={img} alt={p.title} style={{
                width: '100%', height: 200, objectFit: 'cover', display: 'block', transition: '0.3s',
              }} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      {/* Text below — same structure as blog text */}
      <Typography fontSize={11} color="#ff7171" fontWeight={600} textTransform="uppercase" mb={0.5}>{p.category}</Typography>
      <Typography fontSize={13} fontWeight={600} lineHeight={1.4} mb={0.4}
        sx={{ cursor: 'pointer', '&:hover': { color: '#ff7171' }, transition: '0.2s' }}>
        {p.title}
      </Typography>
      <Stars count={p.stars} />
      <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', mt: 0.5, mb: 1 }}>
        <Typography fontSize={13} fontWeight={800} color="#ff7171">${p.price}.00</Typography>
        <Typography component="del" fontSize={12} color="text.secondary">${p.oldPrice}.00</Typography>
      </Box>
      <Box sx={{ display: 'flex', gap: 1 }}>
        <Button variant="contained" size="small" startIcon={<AddShoppingCartIcon sx={{ fontSize: '13px !important' }} />}
          sx={{ bgcolor: '#222', '&:hover': { bgcolor: '#ff7171' }, fontWeight: 700, fontSize: 11, flex: 1, py: 0.7 }}>
          Add to Cart
        </Button>
        <Button variant="outlined" size="small" onClick={() => setModalOpen(true)}
          sx={{ borderColor: '#ddd', color: '#222', '&:hover': { borderColor: '#ff7171', color: '#ff7171', bgcolor: 'transparent' }, fontSize: 11, fontWeight: 600, px: 1.5 }}>
          Details
        </Button>
      </Box>

      <ProductModal p={p} open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}

export default function ProductGrid() {
  return (
    <Box sx={{ mb: 3 }}>
      <Typography fontSize={15} fontWeight={600} letterSpacing={0.4} textTransform="capitalize"
        pb={1} mb={3} borderBottom="1px solid #eee">
        New Products
      </Typography>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        loop
        breakpoints={breakpoints}
        style={swiperStyle}
      >
        {products.map((p, i) => (
          <SwiperSlide key={i}>
            <ProductCard p={p} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
