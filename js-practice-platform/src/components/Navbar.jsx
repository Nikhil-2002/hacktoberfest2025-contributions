import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
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
  PanelLeftClose, 
  PanelLeftOpen
} from 'lucide-react';
import { toggleDarkMode } from '../store/slices/themeSlice';
import { logout } from '../store/slices/authSlice';
import AuthModal from './AuthModal';
import Logo from '../assets/Logo.png'; 


const Navbar = ({ isCollapsed, onToggleSidebar }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { darkMode } = useSelector((state) => state.theme);
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState('signin');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  return (
    <>
      {/* Top Header */}
      <header className="top-header">
        <div className="flex items-center justify-between w-full">
          {/* Logo and Title */}
          <div className="flex items-center gap-3">
            <button 
              className="md:hidden btn-icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu size={24} />
            </button>
            <img 
              src={Logo}  
              alt="JS Practice Platform" 
              className="w-12 h-12 object-contain rounded-lg shadow-md"
            />
            <h1 className="text-xl font-bold text-gray-900 dark:text-white hidden sm:block">
              JS Practice Platform
            </h1>
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-3">
            <button
          onClick={onToggleSidebar}
          // Use 'lg:flex' or 'md:flex' if those utility classes are preferred for visibility
          className="btn-icon hidden md:flex" 
          title={isCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
      >
          {isCollapsed ? <PanelLeftOpen size={20} /> : <PanelLeftClose size={20} />}
      </button>
            <button
              onClick={handleDarkModeToggle}
              className="btn-icon"
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            {!isAuthenticated ? (
              <>
                <button onClick={handleSignIn} className="btn btn-secondary">
                  <LogIn size={16} />
                  Sign In
                </button>
                <button onClick={handleSignUp} className="btn btn-primary">
                  <UserPlus size={16} />
                  Sign Up
                </button>
              </>
            ) : (
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-sm font-bold text-gray-900">
                    {user?.name?.charAt(0) || 'U'}
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 text-sm font-medium hidden sm:block">
                    {user?.name}
                  </span>
                </div>
                <button onClick={handleLogout} className="btn btn-secondary">
                  <LogOut size={16} />
                  <span className="hidden sm:inline">Sign Out</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Sidebar Navigation */}
      <nav className={`navbar ${mobileMenuOpen ? 'open' : ''} ${isCollapsed ? 'collapsed' : ''}`}>
        <div className="navbar-header">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src={Logo} 
                alt="JS Practice Platform" 
                className="w-10 h-10 object-contain rounded-lg shadow-sm"
              />
              <span className="text-white font-semibold text-lg">JS Practice</span>
            </div>
            <button 
              className="md:hidden btn-icon text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={20} />
            </button>
          </div>
        </div>

        <ul className="navbar-nav">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.path} className="nav-item">
                <Link
                  to={item.path}
                  className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Icon size={20} />
                  <span className="nav-link-text">{item.name}</span> 
                  {/* REMOVED: The extra {item.name} that caused duplication */}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
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