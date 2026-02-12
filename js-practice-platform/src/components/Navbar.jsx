import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { 
  LayoutDashboard, 
  BookOpen, 
  Code, 
  Globe, 
  Target, 
  BrainCircuit,
  Sun,
  Moon,
  LogIn,
  UserPlus,
  LogOut,
  Menu,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { toggleDarkMode } from '../store/slices/themeSlice';
import { logout } from '../store/slices/authSlice';
import AuthModal from './AuthModal';

const Navbar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { darkMode } = useSelector((state) => state.theme);
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState('signin');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const navItems = [
    {
      path: '/',
      name: 'Dashboard',
      icon: LayoutDashboard
    },
    {
      path: '/javascript-basics',
      name: 'JavaScript Basics',
      icon: BookOpen
    },
    {
      path: '/intermediate-javascript',
      name: 'Intermediate JavaScript',
      icon: Code
    },
    {
      path: '/javascript-dom',
      name: 'JavaScript DOM Exercises',
      icon: Globe
    },
    {
      path: '/javascript-practice',
      name: 'JavaScript Practice',
      icon: Target
    },
    {
      path: '/interview-questions',
      name: 'Special Interview Asked Exercise',
      icon: BrainCircuit
    }
  ];

  const handleDarkModeToggle = () => {
    dispatch(toggleDarkMode());
  };

  const handleSignIn = () => {
    setAuthMode('signin');
    setAuthModalOpen(true);
  };

  const handleSignUp = () => {
    setAuthMode('signup');
    setAuthModalOpen(true);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const toggleSidebarVisibility = () => {
    setSidebarVisible(!sidebarVisible);
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      {/* Top Header */}
      <motion.header 
        className="top-header"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="flex items-center justify-between w-full">
          {/* Logo and Title */}
          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <motion.img 
              src="/Logo.png" 
              alt="JS Practice Platform" 
              className="w-12 h-12 object-contain rounded-lg shadow-md"
              whileHover={{ rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <motion.h1 
              className="text-xl font-bold text-gray-900 dark:text-white hidden sm:block"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              JS Practice Platform
            </motion.h1>
          </motion.div>

          {/* Right side actions */}
          <div className="flex items-center gap-3">
            {/* Toggle Sidebar Visibility Button */}
            <motion.button
              onClick={toggleSidebarVisibility}
              className="btn-icon hidden md:block"
              title={sidebarVisible ? 'Hide sidebar' : 'Show sidebar'}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {sidebarVisible ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
            </motion.button>
            
            <motion.button
              onClick={handleDarkModeToggle}
              className="btn-icon"
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
            
            {!isAuthenticated ? (
              <>
                <motion.button 
                  onClick={handleSignIn} 
                  className="btn btn-secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <LogIn size={16} />
                  Sign In
                </motion.button>
                <motion.button 
                  onClick={handleSignUp} 
                  className="btn btn-primary"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 500 }}
                >
                  <UserPlus size={16} />
                  Sign Up
                </motion.button>
              </>
            ) : (
              <motion.div 
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <div className="flex items-center gap-2">
                  <motion.div 
                    className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-sm font-bold text-gray-900"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {user?.name?.charAt(0) || 'U'}
                  </motion.div>
                  <span className="text-gray-700 dark:text-gray-300 text-sm font-medium hidden sm:block">
                    {user?.name}
                  </span>
                </div>
                <motion.button 
                  onClick={handleLogout} 
                  className="btn btn-secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <LogOut size={16} />
                  <span className="hidden sm:inline">Sign Out</span>
                </motion.button>
              </motion.div>
            )}
          </div>
        </div>
      </motion.header>

      {/* Sidebar Navigation */}
      <AnimatePresence>
        {sidebarVisible && (mobileMenuOpen || window.innerWidth > 768) && (
          <motion.nav 
            className={`navbar ${mobileMenuOpen ? 'open' : ''} ${sidebarCollapsed ? 'collapsed' : ''}`}
            initial={{ x: -300 }}
            animate={{ x: sidebarCollapsed ? -240 : 0 }}
            exit={{ x: -300 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="navbar-header">
              <div className="flex items-center justify-between">
                {!sidebarCollapsed && (
                  <motion.div 
                    className="flex items-center gap-3"
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.img 
                      src="/Logo.png" 
                      alt="JS Practice Platform" 
                      className="w-10 h-10 object-contain rounded-lg shadow-sm"
                      whileHover={{ rotate: 5 }}
                    />
                    <motion.span 
                      className="text-white font-semibold text-lg"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      JS Practice
                    </motion.span>
                  </motion.div>
                )}
                <div className="flex items-center gap-2">
                  <motion.button 
                    className="md:hidden btn-icon text-white"
                    onClick={() => setMobileMenuOpen(false)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X size={20} />
                  </motion.button>
                  <motion.button 
                    className="btn-icon text-white hidden md:block"
                    onClick={toggleSidebar}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    title={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
                  >
                    <ChevronLeft size={20} className={sidebarCollapsed ? 'rotate-180' : ''} />
                  </motion.button>
                </div>
              </div>
            </div>

            <motion.ul 
              className="navbar-nav"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                
                return (
                  <motion.li 
                    key={item.path} 
                    className="nav-item"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 }
                    }}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Link
                      to={item.path}
                      className={`nav-link ${isActive ? 'active' : ''}`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 500 }}
                      >
                        <Icon size={20} />
                      </motion.div>
                      {!sidebarCollapsed && item.name}
                    </Link>
                  </motion.li>
                );
              })}
            </motion.ul>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>
      
      {/* Mobile Menu Toggle Button - Only visible on mobile */}
      <motion.button 
        className="fixed top-4 left-4 z-50 md:hidden btn-icon bg-white dark:bg-gray-800 shadow-lg"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle mobile menu"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ 
          rotate: mobileMenuOpen ? 90 : 0,
          borderRadius: mobileMenuOpen ? "50%" : "8px"
        }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </motion.button>
      
      {/* Sidebar Toggle Button (Visible when sidebar is hidden) */}
      {!sidebarVisible && (
        <motion.button 
          className="fixed top-20 left-4 z-50 btn-icon bg-white dark:bg-gray-800 shadow-lg hidden md:block"
          onClick={toggleSidebarVisibility}
          aria-label="Toggle sidebar"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <ChevronRight size={20} />
        </motion.button>
      )}
      
      <AuthModal 
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        mode={authMode}
      />
    </>
  );
};

export default Navbar;