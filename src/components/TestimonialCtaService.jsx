import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import DirectionsBoatOutlinedIcon from '@mui/icons-material/DirectionsBoatOutlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import ReplayOutlinedIcon from '@mui/icons-material/ReplayOutlined';
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';

const services = [
  { icon: DirectionsBoatOutlinedIcon, title: 'Worldwide Delivery', desc: 'For Order Over $100' },
  { icon: RocketLaunchOutlinedIcon, title: 'Next Day delivery', desc: 'UK Orders Only' },
  { icon: CallOutlinedIcon, title: 'Best Online Support', desc: 'Hours: 8AM - 11PM' },
  { icon: ReplayOutlinedIcon, title: 'Return Policy', desc: 'Easy & Free Return' },
  { icon: ConfirmationNumberOutlinedIcon, title: '30% money back', desc: 'For Order Over $100' },
];

export default function TestimonialCtaService() {
  return (
    <Box sx={{ mb: 6 }}>
      <Container maxWidth="xl">
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>

          {/* Testimonial */}
          <Box sx={{ minWidth: { xs: '100%', lg: 'calc(25% - 18px)' }, flex: { lg: 1 } }}>
            <Typography fontSize={15} fontWeight={600} letterSpacing={0.4} textTransform="capitalize"
              pb={1} mb={3} borderBottom="1px solid #eee">
              Testimonial
            </Typography>
            <Box sx={{ border: '1px solid #eee', borderRadius: 2, p: 3, textAlign: 'center' }}>
              <Box sx={{ width: 80, height: 80, borderRadius: '50%', overflow: 'hidden', mx: 'auto', mb: 2 }}>
                <img src="/images/testimonial-1.jpg" alt="Alan Doe" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </Box>
              <Typography fontWeight={700} textTransform="uppercase" color="text.secondary" mb={0.5}>Alan Doe</Typography>
              <Typography fontSize={13} color="#222" mb={2}>CEO & Founder Invision</Typography>
              <Box sx={{ mx: 'auto', mb: 1, width: 26 }}>
                <img src="/images/icons/quotes.svg" alt="quotes" style={{ width: '100%' }} />
              </Box>
              <Typography fontSize={13} color="text.secondary" maxWidth="70%" mx="auto">
                "Fast, efficient, and always committed to delivering the best solutions."
              </Typography>
            </Box>
          </Box>

          {/* CTA */}
          <Box sx={{ minWidth: { xs: '100%', sm: 'calc(50% - 12px)', lg: 'calc(50% - 18px)' }, flex: { lg: 2 } }}>
            <Box sx={{ position: 'relative', borderRadius: 2, overflow: 'hidden', height: { xs: 300, sm: 350, lg: '100%' }, minHeight: 300 }}>
              <img src="/images/cta-banner.jpg" alt="summer collection" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <Box sx={{
                position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
                bgcolor: 'rgba(255,255,255,0.7)', p: { xs: 2, sm: 4 }, textAlign: 'center', borderRadius: 1, width: 'max-content',
              }}>
                <Box sx={{ bgcolor: '#222', color: 'white', fontSize: 11, fontWeight: 600, textTransform: 'uppercase', px: 1, borderRadius: 1, mb: 0.5, display: 'inline-block' }}>25% Discount</Box>
                <Typography fontSize={{ xs: 16, sm: 22 }} textTransform="capitalize" mb={0.5}>Summer collection</Typography>
                <Typography fontSize={13} color="text.secondary" mb={0.5}>Starting @ $10</Typography>
                <Typography fontSize={12} color="text.secondary" fontWeight={700} textTransform="uppercase">Shop now</Typography>
              </Box>
            </Box>
          </Box>

          {/* Services */}
          <Box sx={{ width: '100%' }}>
            <Typography fontSize={15} fontWeight={600} letterSpacing={0.4} textTransform="capitalize"
              pb={1} mb={3} borderBottom="1px solid #eee">
              Our Services
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 3, p: 3, border: '1px solid #eee', borderRadius: 2 }}>
              {services.map((s, i) => (
                <Box key={i} sx={{ display: 'flex', flexDirection: { xs: 'row', lg: 'column' }, alignItems: 'center', gap: 1.5, minWidth: 190, textAlign: { lg: 'center' }, cursor: 'pointer', '&:hover .svc-icon': { color: '#222' } }}>
                  <s.icon className="svc-icon" sx={{ fontSize: 35, color: '#ff7171', transition: '0.2s' }} />
                  <Box>
                    <Typography fontSize={13} fontWeight={600} color="text.secondary" textTransform="capitalize" mb={0.5}>{s.title}</Typography>
                    <Typography fontSize={11} color="text.secondary">{s.desc}</Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>

        </Box>
      </Container>
    </Box>
  );
}
