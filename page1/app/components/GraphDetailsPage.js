// components/GraphDetailsPage.js

import React from 'react';

const GraphDetailsPage = () => {
    return (
        <div className='flex items-center justify-betweenflex items-center bg-pink justify-center h-screen'>

            <div className="container item-center mx-auto p-6 bg-lavender rounded-lg shadow-md">
                {/* 1.3.1 Show graph title, description, date created */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold mb-2 text-dark-800">Graph Title</h1>
                    <p className="text-sm text-gray-500">Date Created: January 1, 2023</p>
                    <p className="text-gray-700">
                        Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>

                {/* 1.3.2 A button to take them to the graph */}
                <div className="mb-8">
                    <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                        View Graph
                    </button>
                </div>

                {/* 1.3.3 List papers shown in the graph */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-4 text-gray-700">Papers in this Graph</h2>
                    {/* Display a list of papers */}
                    <ul className="list-disc pl-4">
                        <li>Paper 1</li>
                        <li>Paper 2</li>
                        <li>Paper 3</li>
                        {/* Add more papers as needed */}
                    </ul>
                </div>

                {/* 1.3.4 Provide buttons to edit, share, or delete a graph */}
                <div>
                    <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 mr-4">
                        Edit Graph
                    </button>
                    <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mr-4">
                        Share Graph
                    </button>
                    <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
                        Delete Graph
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GraphDetailsPage;
