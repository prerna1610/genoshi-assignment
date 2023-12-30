// components/AccountSettings.js

import React from 'react';

const AccountSettings = () => {
  return ( 
    <div className="container mx-auto p-8 bg-purple-100 rounded-lg shadow-md mt-16 mb-16">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Account Settings</h1>

      {/* 1.4.1 Update user profile details */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Update Profile Details</h2>
        <form>
          {/* Add form fields for updating profile details */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 p-3 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-3 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          {/* Add more fields as needed */}
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Update Profile
          </button>
        </form>
      </div>

      {/* 1.4.2 Change password */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Change Password</h2>
        <form>
          {/* Add form fields for changing password */}
          <div className="mb-4">
            <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-600">
              Current Password
            </label>
            <input
              type="password"
              id="currentPassword"
              name="currentPassword"
              className="mt-1 p-3 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="newPassword" className="block text-sm font-medium text-gray-600">
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              className="mt-1 p-3 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          {/* Add more fields as needed */}
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Change Password
          </button>
        </form>
      </div>

      {/* 1.4.3 Manage subscription plan */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Manage Subscription Plan</h2>
        {/* Display current subscription plan and provide options to manage */}
        <p className="mb-2">Current Plan: Free Plan</p>
        <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
          Upgrade Plan
        </button>
      </div>

      {/* 1.4.4 Link third-party accounts like Google */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Link Third-Party Accounts</h2>
        {/* Provide options to link/unlink third-party accounts */}
        <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
          Unlink Google
        </button>
      </div>

      {/* 1.4.5 View usage statistics */}
      <div>
        <h2 className="text-xl font-semibold mb-4 text-gray-700">View Usage Statistics</h2>
        {/* Display usage statistics */}
        <p>Graphs Created: 10</p>
        <p>Graphs Shared: 5</p>
        <p>Papers Collected: 20</p>
      </div>
    </div>

  );
};

export default AccountSettings;
