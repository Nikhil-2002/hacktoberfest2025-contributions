import React from 'react';
import MessCard from '../components/MessCard';
import messesData from '../data/messes.json';

const Favorites = () => {
    // Mock favorites (using first two items for demo)
    const favoriteMesses = messesData.slice(0, 2);

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Your Favorites</h2>
            {favoriteMesses.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {favoriteMesses.map((mess) => (
                        <MessCard key={mess.id} mess={mess} />
                    ))}
                </div>
            ) : (
                <p className="text-gray-600">You haven't added any favorites yet.</p>
            )}
        </div>
    );
};

export default Favorites;
