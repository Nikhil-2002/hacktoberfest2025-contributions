import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import MessList from './pages/MessList';
import MessDetails from './pages/MessDetails';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Favorites from './pages/Favorites';
import { LocationProvider } from './context/LocationContext';

function App() {
  return (
    <LocationProvider>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/messes" element={<MessList />} />
            <Route path="/mess/:id" element={<MessDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </LocationProvider>
  );
}

export default App;
