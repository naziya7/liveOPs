import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Offers from './pages/Offers';
import OfferCreate from './pages/OfferCreate';
import OfferEdit from './pages/OfferEdit';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route exact path="/offers" element={<Offers />} />
        <Route exact path="/offer/create" element={<OfferCreate/>} />
        <Route exact path="/offers/:id/edit" component={<OfferEdit/>} />
      </Routes>
    </Router>
  );
}


export default App;
