import React from 'react';
import { ThemeProvider, CssBaseline, Box, Container } from '@mui/material';
import theme from './theme';
import { SearchProvider, useSearch } from './SearchContext';
import Header from './components/Header';
import SearchResults from './components/SearchResults';
import Banner from './components/Banner';
import Categories from './components/Categories';
import Sidebar from './components/Sidebar';
import ProductMinimal from './components/ProductMinimal';
import ProductFeatured from './components/ProductFeatured';
import ProductGrid from './components/ProductGrid';
import TestimonialCtaService from './components/TestimonialCtaService';
import Blog from './components/Blog';
import Footer from './components/Footer';
import NewsletterModal from './components/NewsletterModal';
import NotificationToast from './components/NotificationToast';

function AppContent() {
  const { query } = useSearch();
  return (
    <>
      <Header />
      <main>
        {query.trim() ? (
          <Container maxWidth="xl">
            <SearchResults />
          </Container>
        ) : (
          <>
            <Banner />
            <Categories />
            <Box sx={{ mb: 4 }}>
              <Container maxWidth="xl">
                <Box sx={{ display: 'flex', gap: 4, alignItems: 'flex-start' }}>
                  <Box sx={{ display: { xs: 'none', lg: 'block' }, minWidth: 'calc(25% - 16px)', position: 'sticky', top: 20 }}>
                    <Sidebar />
                  </Box>
                  <Box sx={{ flex: 1, minWidth: 0 }}>
                    <ProductMinimal />
                    <ProductFeatured />
                    <ProductGrid />
                  </Box>
                </Box>
              </Container>
            </Box>
            <TestimonialCtaService />
            <Blog />
          </>
        )}
      </main>
      <Footer />
      <NewsletterModal />
      <NotificationToast />
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SearchProvider>
        <AppContent />
      </SearchProvider>
    </ThemeProvider>
  );
}
