import './css/styles.css';

import StrictMode  from 'react';
import createRoot  from 'react-dom/client';
import Header  from './components/Header';

createRoot(document.getElementById('root')).render(
      <Header />
)