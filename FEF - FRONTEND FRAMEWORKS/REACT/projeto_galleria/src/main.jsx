import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './global.css'
import Header from './page/Header/Header';
import Body from './page/Body/Body';
import Footer from './page/Footer/Footer';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Body />
    <Footer />
  </StrictMode>
)