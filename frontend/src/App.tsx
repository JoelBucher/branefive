import React from 'react';
import './App.css';
import { HeaderResponsive } from './components/Header/HeaderComponent';
import { MantineProvider } from '@mantine/core';
import { FooterResponsive } from './components/Footer/FooterComponent';
import { ContactUs } from './components/Contact/ContactUsComponent';
import { Route, HashRouter as Router, Routes } from 'react-router-dom'  
import { Newsletter } from './components/Newsletter/NewsletterComponent';
import { Music } from './components/Music/MusicComponent';
import { Home } from './components/Home/Components/HomeComponent';
import { Tour } from './components/Tour/TourComponent';
import { Band } from './components/Band/BandComponent';

const NoPage = () => {
  return <p>This is not a NoPage</p>;
};

function App() {
  return (
    <>
    <MantineProvider theme={{ colorScheme: 'dark' }} withGlobalStyles>
      <Router>  
        <HeaderResponsive/>
          <Routes>
              <Route path="" element={<Home/>}/>
              <Route path="newsletter" element={<Newsletter/>}/>
              <Route path="tour" element={<Tour/>}/>
              <Route path="contact" element={<ContactUs/>}/>
              <Route path="music" element={<Music/>}/>
              <Route path="band" element={<Band/>}/>
              <Route path="*" element={<NoPage/>}/>
          </Routes>
          <FooterResponsive/>
        </Router>
    </MantineProvider>
    </>
  );
}

export default App;
