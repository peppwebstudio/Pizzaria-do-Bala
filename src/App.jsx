import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import PageNotFound from './lib/PageNotFound'; // Se mover para src/pages, ajuste para './pages/PageNotFound'
import { CartProvider } from './context/CartContext';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';

function App() {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        
        <div className="flex flex-col min-h-screen bg-background text-foreground antialiased font-sans overflow-x-hidden">
          {/* Header Global da Pizzaria */}
          <Navbar />
          
          {/* Conteúdo Principal do Sistema */}
          <main className="flex-grow flex flex-col relative z-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </main>
          
          {/* Rodapé Global da Pizzaria */}
          <Footer />
        </div>
        
      </Router>
    </CartProvider>
  );
}

export default App;