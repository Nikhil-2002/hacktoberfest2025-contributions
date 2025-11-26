import React from 'react';
import SearchBar from '../components/SearchBar';
import MessCard from '../components/MessCard';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Star, ShieldCheck, Utensils } from 'lucide-react';
import messesData from '../data/messes.json';

const Home = () => {
    const handleSearch = (query) => {
        console.log("Searching for:", query);
    };

    const features = [
        { icon: ShieldCheck, title: 'Hygienic Food', desc: 'Verified kitchens with strict hygiene standards.' },
        { icon: Star, title: 'Top Rated', desc: 'Choose from the best-rated messes in your area.' },
        { icon: Utensils, title: 'Home Style', desc: 'Authentic home-cooked meals away from home.' },
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-primary-50 pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1543353071-873f17a7a088?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-5"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight"
                        >
                            Find the Best <span className="text-primary-600">Mess</span> Near You
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-gray-600 mb-10"
                        >
                            Discover hygienic, affordable, and delicious home-style food in your area.
                            Join thousands of happy students and professionals.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <SearchBar onSearch={handleSearch} />
                        </motion.div>
                    </div>

                    {/* Features */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + index * 0.1 }}
                                className="bg-white p-6 rounded-2xl shadow-md text-center hover:-translate-y-1 transition-transform duration-300"
                            >
                                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-600">
                                    <feature.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Popular Messes Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-2">Popular Messes</h2>
                            <p className="text-gray-600">Top-rated places recommended by our community</p>
                        </div>
                        <Link to="/messes" className="text-primary-600 font-semibold flex items-center hover:text-primary-700 transition-colors">
                            View All <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {messesData.slice(0, 3).map((mess) => (
                            <MessCard key={mess.id} mess={mess} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-dark-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-primary-600 opacity-10"></div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h2 className="text-4xl font-bold mb-6">Are you a Mess Owner?</h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        List your mess on our platform and reach thousands of potential customers.
                        Manage orders, reviews, and payments easily.
                    </p>
                    <button className="bg-primary-600 text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-primary-700 transition-all shadow-lg hover:shadow-primary-600/30">
                        List Your Mess
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Home;
