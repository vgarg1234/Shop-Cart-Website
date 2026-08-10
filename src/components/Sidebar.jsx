import React, { useState } from 'react';
import { Box, Typography, List, ListItem, Collapse } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';

const sidebarCategories = [
  { icon: '/images/icons/dress.svg', title: 'Clothes', items: [{ name: 'Shirt', stock: 300 }, { name: 'Shorts & jeans', stock: 60 }, { name: 'Jacket', stock: 50 }, { name: 'Dress & frock', stock: 87 }] },
  { icon: '/images/icons/shoes.svg', title: 'Footwear', items: [{ name: 'Sports', stock: 45 }, { name: 'Formal', stock: 75 }, { name: 'Casual', stock: 35 }, { name: 'Safety Shoes', stock: 26 }] },
  { icon: '/images/icons/jewelry.svg', title: 'Jewelry', items: [{ name: 'Earrings', stock: 46 }, { name: 'Couple Rings', stock: 73 }, { name: 'Necklace', stock: 61 }] },
  { icon: '/images/icons/perfume.svg', title: 'Perfume', items: [{ name: 'Clothes Perfume', stock: 12 }, { name: 'Deodorant', stock: 60 }, { name: 'Jacket', stock: 50 }, { name: 'Dress & frock', stock: 87 }] },
  { icon: '/images/icons/cosmetics.svg', title: 'Cosmetics', items: [{ name: 'Shampoo', stock: 68 }, { name: 'Sunscreen', stock: 46 }, { name: 'Body Wash', stock: 79 }, { name: 'Makeup Kit', stock: 23 }] },
  { icon: '/images/icons/glasses.svg', title: 'Glasses', items: [{ name: 'Sunglasses', stock: 50 }, { name: 'Lenses', stock: 48 }] },
  { icon: '/images/icons/bag.svg', title: 'Bags', items: [{ name: 'Shopping Bag', stock: 62 }, { name: 'Gym Backpack', stock: 35 }, { name: 'Purse', stock: 80 }, { name: 'Wallet', stock: 75 }] },
];

const bestSellers = [
  { img: '/images/products/1.jpg', title: 'Baby fabric shoes', oldPrice: 5, price: 4, stars: 5 },
  { img: '/images/products/2.jpg', title: "Men's hoodies t-shirt", oldPrice: 17, price: 7, stars: 4.5 },
  { img: '/images/products/3.jpg', title: 'Girls t-shirt', oldPrice: 5, price: 3, stars: 4.5 },
  { img: '/images/products/4.jpg', title: 'Woolen hat for men', oldPrice: 15, price: 12, stars: 5 },
];

function Stars({ count }) {
  return (
    <Box sx={{ display: 'flex', color: '#f0a500', fontSize: 13 }}>
      {[1, 2, 3, 4, 5].map(i => i <= Math.floor(count)
        ? <StarIcon key={i} sx={{ fontSize: 13 }} />
        : count % 1 >= 0.5 && i === Math.ceil(count)
          ? <StarHalfIcon key={i} sx={{ fontSize: 13 }} />
          : <StarIcon key={i} sx={{ fontSize: 13, color: '#ddd' }} />
      )}
    </Box>
  );
}

function AccordionItem({ cat }) {
  const [open, setOpen] = useState(false);
  return (
    <Box sx={{ borderBottom: '1px solid #eee' }}>
      <Box onClick={() => setOpen(!open)} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 1, cursor: 'pointer' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <img src={cat.icon} alt={cat.title} style={{ width: 20, height: 20 }} />
          <Typography fontSize={14} color="text.secondary" fontWeight={500}>{cat.title}</Typography>
        </Box>
        {open ? <RemoveIcon sx={{ fontSize: 14, color: 'text.secondary' }} /> : <AddIcon sx={{ fontSize: 14, color: 'text.secondary' }} />}
      </Box>
      <Collapse in={open}>
        <List disablePadding sx={{ borderTop: '1px solid #eee', py: 1 }}>
          {cat.items.map(item => (
            <ListItem key={item.name} sx={{ py: 0.3, px: 0, display: 'flex', justifyContent: 'space-between' }}>
              <Typography fontSize={13} color="text.secondary" textTransform="capitalize" sx={{ cursor: 'pointer', '&:hover': { color: '#222' } }}>{item.name}</Typography>
              <Typography fontSize={13} color="text.secondary">{item.stock}</Typography>
            </ListItem>
          ))}
        </List>
      </Collapse>
    </Box>
  );
}

export default function Sidebar() {
  return (
    <Box>
      {/* Categories */}
      <Box sx={{ border: '1px solid #eee', borderRadius: 2, p: 2.5, mb: 3 }}>
        <Typography fontSize={15} fontWeight={600} textTransform="uppercase" letterSpacing={0.8} mb={1.5} pb={1} borderBottom="1px solid #eee">
          Category
        </Typography>
        {sidebarCategories.map(cat => <AccordionItem key={cat.title} cat={cat} />)}
      </Box>

      {/* Best Sellers */}
      <Box>
        <Typography fontSize={15} fontWeight={600} textTransform="uppercase" letterSpacing={0.8} mb={2}>
          Best Sellers
        </Typography>
        {bestSellers.map((p, i) => (
          <Box key={i} sx={{ display: 'flex', gap: 1.5, mb: 2, alignItems: 'center' }}>
            <Box sx={{ width: 75, height: 75, flexShrink: 0, border: '1px solid #eee', borderRadius: 1, overflow: 'hidden' }}>
              <img src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Box>
            <Box sx={{ flex: 1, overflow: 'hidden' }}>
              <Typography fontSize={13} fontWeight={400} textTransform="capitalize" noWrap sx={{ cursor: 'pointer', '&:hover': { color: '#ff7171' } }}>{p.title}</Typography>
              <Stars count={p.stars} />
              <Box sx={{ display: 'flex', gap: 2, mt: 0.5 }}>
                <Typography component="del" fontSize={13} color="text.secondary">${p.oldPrice}.00</Typography>
                <Typography fontSize={13} fontWeight={600} color="#555">${p.price}.00</Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
