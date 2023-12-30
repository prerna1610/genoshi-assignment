// components/CreateNewGraphPage.js

import React from 'react';

const CreateNewGraphPage = () => {
    return (

        <div className="flex items-center justify-center h-screen bg-gray-100 ">
            <div className='col-12 col-lg-8 col-lg-6 col-lg-5'>
                <div className="container mx-auto p-8 bg-lime rounded shadow-md text-center ">
                    <h1 className="text-3xl font-bold mb-6">Create New Graph</h1>

                    {/* 1.2.1 Form to specify graph title and description */}
                    <form className="mb-6">
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Graph Title</label>
                            <input type="text" className="form-input mt-1 block w-full rounded-md" placeholder="Enter title" />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Graph Description</label>
                            <textarea className="form-textarea mt-1 block w-full rounded-md" rows="3" placeholder="Enter description"></textarea>
                        </div>
                    </form>

                    {/* 1.2.2 Upload papers or select from favourites/collections */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700">Upload Papers</label>
                        <input type="file" className="form-input mt-1 block w-full rounded-md" />
                        <p className="text-sm text-gray-500 mt-2">OR</p>
                        <label className="block text-sm font-medium text-gray-700 mt-2">Select from Favourites/Collections</label>
                        {/* Add your select options or components here */}
                    </div>

                    {/* 1.2.3 Configure graph settings - layout, colors, etc */}
                    <div className="mb-6">
                        <h2 className="text-lg font-semibold mb-4">Graph Settings</h2>
                        {/* Add your configuration options here */}
                    </div>

                    {/* 1.2.4 View graph visualization preview */}
                    <div className="mb-6">
                        <h2 className="text-lg font-semibold mb-4">Graph Visualization Preview</h2>
                        {/* Add a placeholder or preview component here */}
                    </div>

                    {/* Submit button */}
                    <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full">Create Graph</button>
                </div>
            </div>
        </div>
    );
};

export default CreateNewGraphPage;
