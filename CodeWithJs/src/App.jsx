import React, { useEffect, Suspense, lazy } from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import NavigationBar from './components/Navbar';
import Footer from './components/Footer';

const Home = lazy(() => import('./pages/Home'));
const SignIn = lazy(() => import('./pages/SignIn'));
const SignUp = lazy(() => import('./pages/SignUp'));
const BasicQuestions = lazy(() => import('./pages/BasicQuestions'));

import './App.css';

function App() {
  const theme = useSelector((state) => state.theme.mode);

  // Apply theme to body and html
  useEffect(() => {
    const isDark = theme === 'dark';
    document.body.className = isDark ? 'bg-dark text-light' : 'bg-light text-dark';
    document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
    document.documentElement.setAttribute('data-bs-theme', theme);
  }, [theme]);

  return (
    <div className={`min-vh-100 ${theme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
      <NavigationBar />

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/basic" element={<BasicQuestions />} />
          {/* Add other category routes here later */}
        </Routes>
      </Suspense>

      <Footer />
    </div>
  );
}

export default App;
