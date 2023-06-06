import React from 'react';
import './App.css';
import { HeaderResponsive } from './components/HeaderComponent';
import { MantineProvider } from '@mantine/core';
import { FooterResponsive } from './components/FooterComponent';
import { StatsGroup } from './components/StatsGroupComponent';
import { ContactUs } from './components/ContactUsComponent';
import { Route, BrowserRouter as Router, Routes, Link } from 'react-router-dom'  
import { Newsletter } from './components/NewsletterComponent';

const NoPage = () => {
  return <Link to="/about">About</Link>;
};

function App() {
  return (
    <>
    <MantineProvider theme={{ colorScheme: 'dark' }} withGlobalStyles>
      <HeaderResponsive/>
        <Router>  
          <Routes>
              <Route path="about" element={<StatsGroup/>}/>
              <Route path="newsletter" element={<Newsletter/>}/>
              <Route path="contact" element={<ContactUs/>}/>
              <Route path="*" element={<NoPage/>}/>
          </Routes>
        </Router>
      <FooterResponsive/>
    </MantineProvider>
    </>
  );
}

export default App;
