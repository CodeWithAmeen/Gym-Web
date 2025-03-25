import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Navbar } from './component/Navbar';
import { Footer } from './component/Footer';
import Loader from './component/Loader';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching or loading delay
    setTimeout(() => {
      setLoading(false);
    }, 4000); // Adjust the delay as needed
  }, []);

  return (
    <BrowserRouter>
      {loading ? <Loader /> : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </>
      )}
    </BrowserRouter>
  );
};

export default App;
