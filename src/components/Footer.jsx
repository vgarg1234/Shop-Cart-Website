import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const navCols = [
  { title: 'Popular Categories', links: [
    { label: 'Fashion', href: '/category/fashion' },
    { label: 'Electronic', href: '/category/electronics' },
    { label: 'Cosmetic', href: '/category/cosmetics' },
    { label: 'Health', href: '/category/health' },
    { label: 'Watches', href: '/category/watches' },
  ]},
  { title: 'Products', links: [
    { label: 'Prices drop', href: '/products/prices-drop' },
    { label: 'New products', href: '/products/new' },
    { label: 'Best sales', href: '/products/best-sales' },
    { label: 'Contact us', href: '/contact' },
    { label: 'Sitemap', href: '/sitemap' },
  ]},
  { title: 'Our Company', links: [
    { label: 'Delivery', href: '/company/delivery' },
    { label: 'Legal Notice', href: '/company/legal' },
    { label: 'Terms and conditions', href: '/company/terms' },
    { label: 'About us', href: '/about' },
    { label: 'Secure payment', href: '/company/secure-payment' },
  ]},
  { title: 'Services', links: [
    { label: 'Prices drop', href: '/services/prices-drop' },
    { label: 'New products', href: '/services/new-products' },
    { label: 'Best sales', href: '/services/best-sales' },
    { label: 'Contact us', href: '/contact' },
    { label: 'Sitemap', href: '/sitemap' },
  ]},
];

const linkSx = { textDecoration: 'none', cursor: 'pointer' };

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: '#ff7171', pt: { xs: 4, lg: 6 }, pb: 0 }}>
      <Container maxWidth="xl">



        {/* Nav Links */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, pb: 4, mb: 4, borderBottom: '1px solid rgba(255,255,255,0.3)' }}>
          {navCols.map(col => (
            <Box key={col.title} sx={{ minWidth: { xs: 'calc(50% - 12px)', md: 'calc(20% - 12px)' }, flex: 1 }}>
              <Typography fontSize={13} color="white" textTransform="uppercase" fontWeight={600} mb={2} pb={0.5}
                sx={{ position: 'relative', '&::before': { content: '""', position: 'absolute', bottom: 0, left: 0, bgcolor: 'white', width: 60, height: 2, borderRadius: 1 } }}>
                {col.title}
              </Typography>
              {col.links.map(link => (
                <Typography component="a" href={link.href} key={link.label} fontSize={13} color="rgba(255,255,255,0.8)" textTransform="capitalize" py={0.4}
                  sx={{ display: 'block', ...linkSx, '&:hover': { color: 'white' } }}>{link.label}</Typography>
              ))}
            </Box>
          ))}

          {/* Contact */}
          <Box sx={{ minWidth: { xs: '100%', md: 'calc(20% - 12px)' }, flex: 1 }}>
            <Typography fontSize={13} color="white" textTransform="uppercase" fontWeight={600} mb={2} pb={0.5}
              sx={{ position: 'relative', '&::before': { content: '""', position: 'absolute', bottom: 0, left: 0, bgcolor: 'white', width: 60, height: 2, borderRadius: 1 } }}>
              Contact
            </Typography>
            <Box sx={{ display: 'flex', gap: 1.5, mb: 1.5, alignItems: 'flex-start' }}>
              <LocationOnOutlinedIcon sx={{ color: 'white', fontSize: 22, flexShrink: 0 }} />
              <Typography component="a" href="https://maps.google.com" target="_blank" fontSize={13} color="rgba(255,255,255,0.8)" sx={{ ...linkSx, '&:hover': { color: 'white' } }}>
                111 State 444 Street, 12345, India
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 1.5, mb: 1.5, alignItems: 'center' }}>
              <CallOutlinedIcon sx={{ color: 'white', fontSize: 22 }} />
              <Typography component="a" href="tel:+16079368058" fontSize={13} color="rgba(255,255,255,0.8)" sx={{ ...linkSx, '&:hover': { color: 'white' } }}>
                (000) 111-2222
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
              <MailOutlinedIcon sx={{ color: 'white', fontSize: 22 }} />
              <Typography component="a" href="mailto:example@gmail.com" fontSize={13} color="rgba(255,255,255,0.8)" sx={{ ...linkSx, '&:hover': { color: 'white' } }}>
                example@gmail.com
              </Typography>
            </Box>
          </Box>

          {/* Follow Us */}
          <Box sx={{ minWidth: { xs: '100%', md: 'calc(20% - 12px)' }, flex: 1 }}>
            <Typography fontSize={13} color="white" textTransform="uppercase" fontWeight={600} mb={2} pb={0.5}
              sx={{ position: 'relative', '&::before': { content: '""', position: 'absolute', bottom: 0, left: 0, bgcolor: 'white', width: 60, height: 2, borderRadius: 1 } }}>
              Follow Us
            </Typography>
            <Box sx={{ display: 'flex', gap: 1.5 }}>
              {[
                { Icon: FacebookIcon, href: 'https://facebook.com' },
                { Icon: TwitterIcon, href: 'https://twitter.com' },
                { Icon: LinkedInIcon, href: 'https://linkedin.com' },
                { Icon: InstagramIcon, href: 'https://instagram.com' },
              ].map(({ Icon, href }, i) => (
                <Box component="a" href={href} target="_blank" key={i} sx={{ bgcolor: 'rgba(255,255,255,0.2)', borderRadius: '50%', p: 0.8, display: 'flex', cursor: 'pointer', transition: '0.2s' }}>
                  <Icon sx={{ fontSize: 18, color: 'white' }} />
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        {/* Footer Bottom */}
        <Box sx={{ textAlign: 'center', pb: 4 }}>
          <img src="/images/payment.png" alt="payment" style={{ maxWidth: 335, width: '100%', marginBottom: 16, opacity: 0.8 }} />
          <Typography fontSize={12} color="rgba(255,255,255,0.8)" fontWeight={500} textTransform="capitalize" letterSpacing={1.2}>
            Copyright © <Typography component="a" href="/" sx={{ color: 'white', fontWeight: 700, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>ShopCart</Typography> all rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
