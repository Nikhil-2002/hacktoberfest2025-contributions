import React from 'react';

const Dashboard = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">User Dashboard</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-2">Profile</h3>
                    <p className="text-gray-600">Manage your personal information.</p>
                    <button className="mt-4 text-orange-600 hover:underline">Edit Profile</button>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-2">Orders</h3>
                    <p className="text-gray-600">View your past orders.</p>
                    <button className="mt-4 text-orange-600 hover:underline">View History</button>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-2">Settings</h3>
                    <p className="text-gray-600">App preferences and notifications.</p>
                    <button className="mt-4 text-orange-600 hover:underline">Manage Settings</button>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
