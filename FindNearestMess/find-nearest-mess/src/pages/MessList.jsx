import React, { useState, useEffect } from 'react';
import MessCard from '../components/MessCard';
import messesData from '../data/messes.json';
import { motion } from 'framer-motion';
import { Filter } from 'lucide-react';

const MessList = () => {
    const [messes, setMesses] = useState([]);

    useEffect(() => {
        setMesses(messesData);
    }, []);

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-12">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Find Your Mess</h1>
                        <p className="text-gray-600 mt-1">Showing {messes.length} results near you</p>
                    </div>

                    <button className="mt-4 md:mt-0 flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors">
                        <Filter className="w-4 h-4" />
                        <span>Filter & Sort</span>
                    </button>
                </div>

                {/* Grid */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {messes.map((mess) => (
                        <MessCard key={mess.id} mess={mess} />
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default MessList;
