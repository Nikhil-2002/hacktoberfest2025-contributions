import React from 'react';
import { MapPin, Mail, Phone, Facebook, Twitter, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-dark-900 text-white pt-16 pb-8 mt-auto">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <div className="bg-primary-600 p-2 rounded-lg">
                                <MapPin className="text-white w-5 h-5" />
                            </div>
                            <span className="text-xl font-bold">FindNearestMess</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Discover the best home-style food in your area. Hygienic, affordable, and delicious meals just a click away.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li><Link to="/" className="hover:text-primary-500 transition-colors">Home</Link></li>
                            <li><Link to="/messes" className="hover:text-primary-500 transition-colors">Find Mess</Link></li>
                            <li><Link to="/about" className="hover:text-primary-500 transition-colors">About Us</Link></li>
                            <li><Link to="/contact" className="hover:text-primary-500 transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-3 text-gray-400">
                            <li className="flex items-center space-x-3">
                                <Mail className="w-4 h-4 text-primary-500" />
                                <span>support@findmess.com</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone className="w-4 h-4 text-primary-500" />
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <MapPin className="w-4 h-4 text-primary-500" />
                                <span>Bangalore, India</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
                        <p className="text-gray-400 text-sm mb-4">Subscribe to get updates on new messes and offers.</p>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-dark-800 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-primary-500 w-full"
                            />
                            <button className="bg-primary-600 px-4 py-2 rounded-r-lg hover:bg-primary-700 transition-colors">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-dark-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm mb-4 md:mb-0">
                        &copy; 2025 FindNearestMess. All rights reserved.
                    </p>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors"><Facebook className="w-5 h-5" /></a>
                        <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors"><Twitter className="w-5 h-5" /></a>
                        <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors"><Instagram className="w-5 h-5" /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
