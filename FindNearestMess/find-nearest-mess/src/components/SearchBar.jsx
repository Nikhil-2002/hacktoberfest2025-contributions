import React from 'react';
import { Search, MapPin } from 'lucide-react';

const SearchBar = ({ onSearch }) => {
    return (
        <div className="relative w-full max-w-2xl mx-auto">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Search className="h-6 w-6 text-gray-400" />
            </div>
            <input
                type="text"
                placeholder="Search for messes, locations, or food..."
                className="w-full pl-12 pr-32 py-4 bg-white rounded-full shadow-lg border border-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all text-lg placeholder:text-gray-400"
                onChange={(e) => onSearch(e.target.value)}
            />
            <div className="absolute inset-y-2 right-2">
                <button className="h-full px-6 bg-primary-600 text-white rounded-full font-semibold hover:bg-primary-700 transition-colors shadow-md flex items-center space-x-2">
                    <span>Search</span>
                </button>
            </div>
        </div>
    );
};

export default SearchBar;
