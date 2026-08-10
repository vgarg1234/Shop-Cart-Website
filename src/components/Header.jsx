import React, { useState } from 'react';
import { useSearch } from '../SearchContext';
import {
  Box, Container, IconButton, InputBase,
  Badge, Typography, Select, MenuItem, Drawer, List, ListItem,
  ListItemText, Collapse, Divider, useMediaQuery, useTheme,
  Paper
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/Person';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const navItems = [
  { label: 'Home', href: '/' },
  {
    label: "Categories", megaMenu: true,
    columns: [
      { title: 'Electronics', items: [
        { label: 'Desktop', href: '/category/electronics/desktop' },
        { label: 'Laptop', href: '/category/electronics/laptop' },
        { label: 'Camera', href: '/category/electronics/camera' },
        { label: 'Tablet', href: '/category/electronics/tablet' },
        { label: 'Headphone', href: '/category/electronics/headphone' },
      ], img: '/images/electronics-banner-1.jpg' },
      { title: "Men's", items: [
        { label: 'Formal', href: '/category/mens/formal' },
        { label: 'Casual', href: '/category/mens/casual' },
        { label: 'Sports', href: '/category/mens/sports' },
        { label: 'Jacket', href: '/category/mens/jacket' },
        { label: 'Sunglasses', href: '/category/mens/sunglasses' },
      ], img: '/images/mens-banner.jpg' },
      { title: "Women's", items: [
        { label: 'Formal', href: '/category/womens/formal' },
        { label: 'Casual', href: '/category/womens/casual' },
        { label: 'Perfume', href: '/category/womens/perfume' },
        { label: 'Cosmetics', href: '/category/womens/cosmetics' },
        { label: 'Bags', href: '/category/womens/bags' },
      ], img: '/images/womens-banner.jpg' },
      { title: 'Electronics', items: [
        { label: 'Smart Watch', href: '/category/electronics/smart-watch' },
        { label: 'Smart TV', href: '/category/electronics/smart-tv' },
        { label: 'Keyboard', href: '/category/electronics/keyboard' },
        { label: 'Mouse', href: '/category/electronics/mouse' },
        { label: 'Microphone', href: '/category/electronics/microphone' },
      ], img: '/images/electronics-banner-2.jpg' },
    ]
  },
  { label: "Men's", href: '/category/mens', items: [
    { label: 'Shirt', href: '/category/mens/shirt' },
    { label: 'Shorts & Jeans', href: '/category/mens/shorts-jeans' },
    { label: 'Safety Shoes', href: '/category/mens/safety-shoes' },
    { label: 'Wallet', href: '/category/mens/wallet' },
  ]},
  { label: "Women's", href: '/category/womens', items: [
    { label: 'Dress & Frock', href: '/category/womens/dress-frock' },
    { label: 'Earrings', href: '/category/womens/earrings' },
    { label: 'Necklace', href: '/category/womens/necklace' },
    { label: 'Makeup Kit', href: '/category/womens/makeup-kit' },
  ]},
  { label: 'Jewellery', href: '/category/jewellery', items: [
    { label: 'Earrings', href: '/category/jewellery/earrings' },
    { label: 'Couple Rings', href: '/category/jewellery/couple-rings' },
    { label: 'Necklace', href: '/category/jewellery/necklace' },
    { label: 'Bracelets', href: '/category/jewellery/bracelets' },
  ]},
  { label: 'Perfume', href: '/category/perfume', items: [
    { label: 'Clothes Perfume', href: '/category/perfume/clothes' },
    { label: 'Deodorant', href: '/category/perfume/deodorant' },
    { label: 'Flower Fragrance', href: '/category/perfume/flower-fragrance' },
    { label: 'Air Freshener', href: '/category/perfume/air-freshener' },
  ]},
  { label: 'Blog', href: '/blog' },
  { label: 'Hot Offers', href: '/hot-offers' },
];

const mobileMenuItems = [
  { label: 'Home', href: '/' },
  { label: "Men's", href: '/category/mens', items: [
    { label: 'Shirt', href: '/category/mens/shirt' },
    { label: 'Shorts & Jeans', href: '/category/mens/shorts-jeans' },
    { label: 'Safety Shoes', href: '/category/mens/safety-shoes' },
    { label: 'Wallet', href: '/category/mens/wallet' },
  ]},
  { label: "Women's", href: '/category/womens', items: [
    { label: 'Dress & Frock', href: '/category/womens/dress-frock' },
    { label: 'Earrings', href: '/category/womens/earrings' },
    { label: 'Necklace', href: '/category/womens/necklace' },
    { label: 'Makeup Kit', href: '/category/womens/makeup-kit' },
  ]},
  { label: 'Jewelry', href: '/category/jewellery', items: [
    { label: 'Earrings', href: '/category/jewellery/earrings' },
    { label: 'Couple Rings', href: '/category/jewellery/couple-rings' },
    { label: 'Necklace', href: '/category/jewellery/necklace' },
    { label: 'Bracelets', href: '/category/jewellery/bracelets' },
  ]},
  { label: 'Perfume', href: '/category/perfume', items: [
    { label: 'Clothes Perfume', href: '/category/perfume/clothes' },
    { label: 'Deodorant', href: '/category/perfume/deodorant' },
    { label: 'Flower Fragrance', href: '/category/perfume/flower-fragrance' },
    { label: 'Air Freshener', href: '/category/perfume/air-freshener' },
  ]},
  { label: 'Blog', href: '/blog' },
  { label: 'Hot Offers', href: '/hot-offers' },
];

function MobileAccordion({ item }) {
  const [open, setOpen] = useState(false);
  if (!item.items) return (
    <ListItem component="a" href={item.href} sx={{ py: 1.5, borderBottom: '1px solid #eee', textDecoration: 'none', color: 'inherit', '&:hover': { color: '#ff7171' } }}>
      <ListItemText primary={item.label} primaryTypographyProps={{ fontSize: 14, fontWeight: 500 }} />
    </ListItem>
  );
  return (
    <>
      <ListItem button onClick={() => setOpen(!open)} sx={{ py: 1.5, borderBottom: '1px solid #eee' }}>
        <ListItemText primary={item.label} primaryTypographyProps={{ fontSize: 14, fontWeight: 500 }} />
        {open ? <ExpandLessIcon fontSize="small" /> : <ExpandMoreIcon fontSize="small" />}
      </ListItem>
      <Collapse in={open}>
        <List disablePadding>
          {item.items.map(sub => (
            <ListItem component="a" href={sub.href} key={sub.label} sx={{ pl: 3, py: 0.5, textDecoration: 'none', color: 'inherit', '&:hover': { color: '#ff7171' } }}>
              <ListItemText primary={sub.label} primaryTypographyProps={{ fontSize: 13, color: 'text.secondary' }} />
            </ListItem>
          ))}
        </List>
      </Collapse>
    </>
  );
}

function DesktopNavItem({ item }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  if (!item.items && !item.megaMenu) {
    return (
      <Typography component="a" href={item.href} sx={{
        fontSize: 13, fontWeight: 600, textTransform: 'uppercase', cursor: 'pointer', py: 2, px: 0.5,
        color: '#222', position: 'relative', textDecoration: 'none',
        '&:hover': { color: '#ff7171' },
        '&::after': { content: '""', position: 'absolute', bottom: 0, left: 0, width: '100%', height: 2, bgcolor: '#ff7171', transform: 'scaleX(0)', transformOrigin: 'left', transition: '0.2s' },
        '&:hover::after': { transform: 'scaleX(1)' },
      }}>
        {item.label}
      </Typography>
    );
  }

  return (
    <Box onMouseEnter={e => setAnchorEl(e.currentTarget)} onMouseLeave={() => setAnchorEl(null)} sx={{ position: 'relative' }}>
      <Typography sx={{
        fontSize: 13, fontWeight: 600, textTransform: 'uppercase', cursor: 'pointer', py: 2, px: 0.5,
        color: open ? '#ff7171' : '#222',
        '&::after': { content: '""', position: 'absolute', bottom: 0, left: 0, width: '100%', height: 2, bgcolor: '#ff7171', transform: open ? 'scaleX(1)' : 'scaleX(0)', transformOrigin: 'left', transition: '0.2s' },
      }}>
        {item.label}
      </Typography>
      {item.megaMenu ? (
        <Paper elevation={3} sx={{
          position: 'absolute', top: '100%', left: 0, width: 800, p: 3,
          display: open ? 'grid' : 'none', gridTemplateColumns: 'repeat(4,1fr)', gap: 3, zIndex: 100,
          borderRadius: 2,
        }}>
          {item.columns.map(col => (
            <Box key={col.title}>
              <Typography fontWeight={600} fontSize={13} pb={1} mb={1} borderBottom="1px solid #eee">{col.title}</Typography>
              {col.items.map(i => <Typography component="a" href={i.href} key={i.label} fontSize={13} color="text.secondary" py={0.5} sx={{ display: 'block', textDecoration: 'none', cursor: 'pointer', '&:hover': { color: '#ff7171' } }}>{i.label}</Typography>)}
              <Box mt={2}><img src={col.img} alt={col.title} style={{ width: '100%', borderRadius: 5 }} /></Box>
            </Box>
          ))}
        </Paper>
      ) : (
        <Paper elevation={3} sx={{
          position: 'absolute', top: '100%', left: 0, width: 200, py: 2,
          display: open ? 'block' : 'none', zIndex: 100, borderRadius: 2,
        }}>
          {item.items.map(i => (
            <Typography component="a" href={i.href} key={i.label} fontSize={13} color="text.secondary" px={2.5} py={0.5} sx={{ display: 'block', textDecoration: 'none', cursor: 'pointer', '&:hover': { color: '#ff7171' } }}>{i.label}</Typography>
          ))}
        </Paper>
      )}
    </Box>
  );
}

export default function Header() {
  const theme = useTheme();
  useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { query, setQuery } = useSearch();

  return (
    <>
      {/* Header Top */}
      <Box sx={{ bgcolor: 'white', borderBottom: '1px solid #eee', display: { xs: 'none', sm: 'block' } }}>
        <Container maxWidth="xl">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 1 }}>
            <Box sx={{ display: { xs: 'none', lg: 'flex' }, gap: 0.5 }}>
              {[FacebookIcon, TwitterIcon, InstagramIcon, LinkedInIcon].map((Icon, i) => (
                <IconButton key={i} size="small" sx={{ bgcolor: '#f5f5f5', borderRadius: 1, '&:hover': { bgcolor: '#ff7171', color: 'white' } }}>
                  <Icon fontSize="small" />
                </IconButton>
              ))}
            </Box>
            <Typography variant="caption" color="text.secondary" textTransform="uppercase">
              <b>Free Shipping</b> This Week Order Over - $55
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Select defaultValue="usd" size="small" variant="standard" disableUnderline sx={{ fontSize: 12, color: 'text.secondary' }}>
                <MenuItem value="usd" sx={{ fontSize: 12 }}>USD $</MenuItem>
                <MenuItem value="eur" sx={{ fontSize: 12 }}>EUR €</MenuItem>
              </Select>
              <Select defaultValue="en" size="small" variant="standard" disableUnderline sx={{ fontSize: 12, color: 'text.secondary' }}>
                <MenuItem value="en" sx={{ fontSize: 12 }}>English</MenuItem>
                <MenuItem value="es" sx={{ fontSize: 12 }}>Español</MenuItem>
                <MenuItem value="fr" sx={{ fontSize: 12 }}>Français</MenuItem>
              </Select>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Header Main */}
      <Box sx={{ bgcolor: 'white', borderBottom: '1px solid #eee', py: 2 }}>
        <Container maxWidth="xl">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, md: 5 } }}>
            <Box component="a" href="#" sx={{ flexShrink: 0 }}>
              <img src="/images/logo/download (2).png" alt="ShopCart" style={{ height: 36 }} />
            </Box>
            <Box sx={{
              flex: 1, display: 'flex', alignItems: 'center',
              border: '1px solid #eee', borderRadius: 2, px: 2, py: 0.5,
            }}>
              <InputBase
                placeholder="Enter your product name..."
                value={query}
                onChange={e => setQuery(e.target.value)}
                onKeyDown={e => e.key === 'Escape' && setQuery('')}
                sx={{ flex: 1, fontSize: 14 }}
              />
              <IconButton size="small" sx={{ color: '#222', '&:hover': { color: '#ff7171' } }}>
                <SearchIcon />
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
              <IconButton sx={{ fontSize: 30, color: '#222' }}><PersonOutlineIcon /></IconButton>
              <IconButton sx={{ fontSize: 30, color: '#222' }}>
                <Badge badgeContent={1} color="error"><FavoriteBorderIcon /></Badge>
              </IconButton>
              <IconButton sx={{ fontSize: 30, color: '#222' }}>
                <Badge badgeContent={1} color="error"><ShoppingBagOutlinedIcon /></Badge>
              </IconButton>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Desktop Nav */}
      <Box sx={{ bgcolor: 'white', borderBottom: '1px solid #eee', display: { xs: 'none', md: 'block' } }}>
        <Container maxWidth="xl">
          <Box sx={{ display: 'flex', gap: { md: 3, lg: 4 }, alignItems: 'center' }}>
            {navItems.map(item => <DesktopNavItem key={item.label} item={item} />)}
          </Box>
        </Container>
      </Box>

      {/* Mobile Bottom Nav */}
      <Box sx={{
        display: { xs: 'flex', md: 'none' }, position: 'fixed', bottom: 0, left: '50%',
        transform: 'translateX(-50%)', width: '100%', maxWidth: 500,
        bgcolor: 'white', justifyContent: 'space-around', alignItems: 'center',
        py: 0.5, boxShadow: '0 0 10px rgba(0,0,0,0.2)', zIndex: 1200,
      }}>
        <IconButton onClick={() => setDrawerOpen(true)} sx={{ color: '#222', fontSize: 26 }}><MenuIcon /></IconButton>
        <IconButton sx={{ color: '#222' }}><Badge badgeContent={0} color="error"><ShoppingBagOutlinedIcon /></Badge></IconButton>
        <IconButton sx={{ color: '#222' }}><HomeOutlinedIcon /></IconButton>
        <IconButton sx={{ color: '#222' }}><Badge badgeContent={0} color="error"><FavoriteBorderIcon /></Badge></IconButton>
        <IconButton onClick={() => setDrawerOpen(true)} sx={{ color: '#222' }}><GridViewOutlinedIcon /></IconButton>
      </Box>

      {/* Mobile Drawer */}
      <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}
        PaperProps={{ sx: { width: 300, p: 2.5 } }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1, pb: 1.5, borderBottom: '2px solid #eee' }}>
          <Typography fontWeight={600} fontSize={18} color="#ff7171">Menu</Typography>
          <IconButton onClick={() => setDrawerOpen(false)}><CloseIcon /></IconButton>
        </Box>
        <List disablePadding sx={{ mb: 3 }}>
          {mobileMenuItems.map(item => <MobileAccordion key={item.label} item={item} />)}
        </List>
        <Divider sx={{ mb: 2 }} />
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
          {[FacebookIcon, TwitterIcon, InstagramIcon, LinkedInIcon].map((Icon, i) => (
            <IconButton key={i} sx={{ bgcolor: '#f5f5f5', borderRadius: 2 }}><Icon fontSize="small" /></IconButton>
          ))}
        </Box>
      </Drawer>
    </>
  );
}
