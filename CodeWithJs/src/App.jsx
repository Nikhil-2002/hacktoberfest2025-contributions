

import  { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import Footer from './components/Footer';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import BasicQuestions from './pages/BasicQuestions';
import AdvancedQuestions from './pages/AdvancedQuestion';
import IntermediateQuestion from './pages/IntermediateQuestion';
import InterviewQuestion from './pages/InterviewQuestion';
import PseudoCodes from './pages/PseudoCodes';
import './App.css';
import Home from './pages/Home';

function App() {
  const theme = useSelector((state) => state.theme.mode);

  // Apply theme to body
  useEffect(() => {
    const isDark = theme === 'dark';
    document.body.className = isDark ? 'bg-dark text-light' : 'bg-light text-dark';
    document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
    document.documentElement.setAttribute('data-bs-theme', theme);
  }, [theme]);

  return (
    <div className={`min-vh-100 ${theme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/basic" element={<BasicQuestions />} />
        <Route path="/advanced" element={<AdvancedQuestions />} />
        <Route path="/intermediate" element={<IntermediateQuestion />} />
        <Route path="/interview" element={<InterviewQuestion />} />
        <Route path="/pseudo" element={<PseudoCodes />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
