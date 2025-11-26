import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MapPin, Home, Search, Heart, User, Menu, X, LogIn } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/', icon: Home },
        { name: 'Find Mess', path: '/messes', icon: Search },
        { name: 'Favorites', path: '/favorites', icon: Heart },
        { name: 'Dashboard', path: '/dashboard', icon: User },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2 group">
                        <div className="bg-primary-600 p-2 rounded-lg group-hover:bg-primary-700 transition-colors">
                            <MapPin className="text-white w-6 h-6" />
                        </div>
                        <span className="text-xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                            FindNearestMess
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => {
                            const Icon = link.icon;
                            const isActive = location.pathname === link.path;
                            return (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={cn(
                                        "flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary-600",
                                        isActive ? "text-primary-600" : "text-gray-600"
                                    )}
                                >
                                    <Icon className="w-4 h-4" />
                                    <span>{link.name}</span>
                                    {isActive && (
                                        <motion.div
                                            layoutId="navbar-indicator"
                                            className="absolute bottom-0 h-0.5 bg-primary-600"
                                            initial={false}
                                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                        />
                                    )}
                                </Link>
                            );
                        })}
                        <Link to="/login" className="btn-primary flex items-center space-x-2 px-4 py-2 text-sm">
                            <LogIn className="w-4 h-4" />
                            <span>Login</span>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 rounded-lg hover:bg-gray-100 text-gray-600"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
                    >
                        <div className="container mx-auto px-4 py-4 space-y-2">
                            {navLinks.map((link) => {
                                const Icon = link.icon;
                                const isActive = location.pathname === link.path;
                                return (
                                    <Link
                                        key={link.name}
                                        to={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className={cn(
                                            "flex items-center space-x-3 p-3 rounded-lg transition-colors",
                                            isActive ? "bg-primary-50 text-primary-600" : "text-gray-600 hover:bg-gray-50"
                                        )}
                                    >
                                        <Icon className="w-5 h-5" />
                                        <span className="font-medium">{link.name}</span>
                                    </Link>
                                );
                            })}
                            <Link
                                to="/login"
                                onClick={() => setIsOpen(false)}
                                className="flex items-center space-x-3 p-3 rounded-lg text-primary-600 hover:bg-primary-50 font-medium"
                            >
                                <LogIn className="w-5 h-5" />
                                <span>Login</span>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
