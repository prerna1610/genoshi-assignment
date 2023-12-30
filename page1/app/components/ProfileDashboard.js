import Link from 'next/link';

import React from 'react';

const ProfileDashboard = () => {
    return (
        <div className='flex items-center justify-betweenflex items-center justify-center h-screen bg-lavender'>
            <div className="container mx-auto p-4 bg-blue-100">
                <h1 className="text-3xl font-bold mb-6 text-center">Profile Dashboard</h1>

                {/* 1.1.1 User profile details - name, email, profile photo, bio */}
                <div className="flex items-center mb-6 bg-white p-4 rounded shadow-md">
                    <div>
                        <h2 className="text-xl font-bold">John Doe</h2>
                        <p className="text-gray-600">john.doe@example.com</p>
                        <p className="mt-2 text-sm">Bio: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>

                {/* 1.1.2 Account details - current subscription plan & status */}
                <div className="mb-6 bg-white p-4 rounded shadow-md">
                    <h2 className="text-lg font-semibold mb-2">Account Details</h2>
                    <p>Subscription Plan: Premium</p>
                    <p>Status: Active</p>
                </div>

                {/* 1.1.3 Usage metrics - graphs created, graphs shared, papers collected */}
                <div className="mb-6 bg-white p-4 rounded shadow-md">
                    <h2 className="text-lg font-semibold mb-2">Usage Metrics</h2>
                    <p>Graphs Created: 20</p>
                    <p>Graphs Shared: 10</p>
                    <p>Papers Collected: 30</p>
                </div>

                {/* 1.1.4 Recent activity feed - show recent graphs, collections, queries */}
                <div className="mb-6 bg-white p-4 rounded shadow-md">
                    <h2 className="text-lg font-semibold mb-2">Recent Activity Feed</h2>
                    {/* Add recent activity items, e.g., using a list or cards */}
                </div>

                {/* 1.1.5 Buttons to create new graphs, share graphs, upload papers */}
                <div className="mb-6 flex">
                    <button className="bg-blue-500 text-white py-2 px-4 rounded mr-2">Create New Graph</button>
                    <button className="bg-green-500 text-white py-2 px-4 rounded mr-2">Share Graphs</button>
                    <button className="bg-yellow-500 text-white py-2 px-4 rounded">Upload Papers</button>
                </div>

                {/* 1.1.6 List of saved graphs with title, date created, preview thumbnail */}
                <div className="mb-6 bg-white p-4 rounded shadow-md">
                    <h2 className="text-lg font-semibold mb-2">Saved Graphs</h2>
                    {/* Add a list of saved graphs with details */}
                </div>

                {/* 1.1.7 Link to Favourites and Collections pages */}
                <div className="bg-white p-4 rounded shadow-md">
                    <p className="text-blue-500 underline cursor-pointer">Favourites</p>
                    <p className="text-blue-500 underline cursor-pointer">Collections</p>
                </div>
            </div>
        </div>
    );
};

export default ProfileDashboard;
