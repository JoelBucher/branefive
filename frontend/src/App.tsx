import React from 'react';
import './App.css';
import { HeaderResponsive } from './components/HeaderComponent';
import { MantineProvider } from '@mantine/core';
import { FooterResponsive } from './components/FooterComponent';
import { StatsGroup } from './components/StatsGroupComponent';
import { ContactUs } from './components/ContactUsComponent';
import { Route, HashRouter as Router, Routes } from 'react-router-dom'  
import { Newsletter } from './components/NewsletterComponent';
import { Music } from './components/Music/MusicComponent';
import { Home } from './components/Home/Components/HomeComponent';
import { Tour } from './components/Tour/TourComponent';

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
              <Route path="*" element={<NoPage/>}/>
          </Routes>
          <FooterResponsive/>
        </Router>
    </MantineProvider>
    </>
  );
}

export default App;
