import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import messesData from '../data/messes.json';
import { Star, MapPin, Clock, Phone, Share2, Heart, ChevronLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const MessDetails = () => {
    const { id } = useParams();
    const [mess, setMess] = useState(null);

    useEffect(() => {
        const foundMess = messesData.find((m) => m.id === parseInt(id));
        setMess(foundMess);
    }, [id]);

    if (!mess) {
        return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
    }

    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            {/* Header Image */}
            <div className="relative h-80 md:h-96">
                <img src={mess.image} alt={mess.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute top-20 left-4 md:left-8">
                    <Link to="/messes" className="bg-white/20 backdrop-blur-md text-white p-2 rounded-full hover:bg-white/30 transition-colors inline-flex">
                        <ChevronLeft className="w-6 h-6" />
                    </Link>
                </div>
            </div>

            {/* Content Container */}
            <div className="container mx-auto px-4 -mt-20 relative z-10">
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                    <div className="p-6 md:p-8">
                        {/* Title Header */}
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                            <div>
                                <div className="flex items-center space-x-3 mb-2">
                                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{mess.name}</h1>
                                    <span className={`px-3 py-1 rounded-full text-sm font-bold ${mess.type === 'Veg' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                                        }`}>
                                        {mess.type}
                                    </span>
                                </div>
                                <div className="flex items-center text-gray-500 space-x-4">
                                    <div className="flex items-center">
                                        <MapPin className="w-4 h-4 mr-1" />
                                        <span>{mess.distance} away</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Star className="w-4 h-4 mr-1 text-yellow-400 fill-yellow-400" />
                                        <span className="font-bold text-gray-700">{mess.rating}</span>
                                        <span className="ml-1">(120+ reviews)</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex space-x-3 mt-4 md:mt-0">
                                <button className="p-3 rounded-full border border-gray-200 hover:bg-gray-50 text-gray-600 transition-colors">
                                    <Share2 className="w-5 h-5" />
                                </button>
                                <button className="p-3 rounded-full border border-gray-200 hover:bg-gray-50 text-gray-600 transition-colors">
                                    <Heart className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        <hr className="border-gray-100 my-6" />

                        {/* Info Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="md:col-span-2 space-y-8">
                                {/* Menu Section */}
                                <section>
                                    <h2 className="text-xl font-bold text-gray-900 mb-4">Today's Special</h2>
                                    <div className="bg-primary-50 rounded-2xl p-6">
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {['Paneer Butter Masala', 'Dal Tadka', 'Jeera Rice', 'Butter Naan', 'Gulab Jamun', 'Salad'].map((item, idx) => (
                                                <li key={idx} className="flex items-center space-x-2">
                                                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                                                    <span className="text-gray-700 font-medium">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </section>

                                {/* About Section */}
                                <section>
                                    <h2 className="text-xl font-bold text-gray-900 mb-4">About</h2>
                                    <p className="text-gray-600 leading-relaxed">
                                        Experience authentic home-style cooking with the finest ingredients.
                                        Our mess is known for its hygiene and consistent taste. We offer monthly subscriptions
                                        as well as single meals.
                                    </p>
                                </section>
                            </div>

                            {/* Sidebar */}
                            <div className="space-y-6">
                                <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-gray-600">Price per meal</span>
                                        <span className="text-2xl font-bold text-primary-600">₹{mess.price}</span>
                                    </div>
                                    <button className="w-full btn-primary py-3 mb-3">
                                        Order Now
                                    </button>
                                    <button className="w-full btn-outline py-3">
                                        View Subscription Plans
                                    </button>
                                </div>

                                <div className="bg-gray-50 rounded-2xl p-6">
                                    <h3 className="font-bold text-gray-900 mb-4">Contact & Location</h3>
                                    <div className="space-y-3 text-sm text-gray-600">
                                        <div className="flex items-start">
                                            <MapPin className="w-5 h-5 mr-3 mt-0.5 text-gray-400" />
                                            <span>123, Food Street, Near College Campus, Bangalore - 560001</span>
                                        </div>
                                        <div className="flex items-center">
                                            <Clock className="w-5 h-5 mr-3 text-gray-400" />
                                            <span>Mon - Sun: 7:00 AM - 10:00 PM</span>
                                        </div>
                                        <div className="flex items-center">
                                            <Phone className="w-5 h-5 mr-3 text-gray-400" />
                                            <span>+91 98765 43210</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MessDetails;
