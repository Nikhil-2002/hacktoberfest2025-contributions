import React from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const MessCard = ({ mess }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 border border-gray-100"
        >
            {/* Image Container */}
            <div className="relative h-48 overflow-hidden">
                <img
                    src={mess.image}
                    alt={mess.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg shadow-sm flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="font-bold text-sm text-gray-800">{mess.rating}</span>
                </div>
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold shadow-sm ${mess.type === 'Veg' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                    }`}>
                    {mess.type}
                </div>
            </div>

            {/* Content */}
            <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-primary-600 transition-colors line-clamp-1">
                        {mess.name}
                    </h3>
                    <span className="text-lg font-bold text-primary-600">₹{mess.price}</span>
                </div>

                <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-500 text-sm">
                        <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                        <span className="truncate">{mess.distance} away</span>
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                        <Clock className="w-4 h-4 mr-2 text-gray-400" />
                        <span>Open Now • Closes 10 PM</span>
                    </div>
                </div>

                <Link
                    to={`/mess/${mess.id}`}
                    className="block w-full text-center bg-gray-50 hover:bg-primary-600 text-gray-700 hover:text-white font-semibold py-2.5 rounded-xl transition-all duration-300"
                >
                    View Details
                </Link>
            </div>
        </motion.div>
    );
};

export default MessCard;
