import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Header } from './components/Header'
import {Footer} from './components/Footer'
import {GalleyCard} from './components/GalleryCard'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Header/>
    <GalleyCard/>
    <Footer/>

  </StrictMode>,
)
