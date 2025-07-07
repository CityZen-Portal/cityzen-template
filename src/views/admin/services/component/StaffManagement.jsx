import React from 'react';

const StaffManagement = ({ colorMode }) => {
  return (
    <div className={`${colorMode === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border rounded-xl p-6`}>
      <h2 className={`text-2xl font-bold ${colorMode === 'dark' ? 'text-white' : 'text-gray-800'} mb-6 flex items-center`}>
        <span className="material-icons mr-2">people</span>
        Staff Management
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className={`p-5 ${colorMode === 'dark' ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg`}>
          <h3 className={`text-lg font-semibold ${colorMode === 'dark' ? 'text-white' : 'text-gray-800'}`}>Add Staff</h3>
          <p className={`text-sm ${colorMode === 'dark' ? 'text-gray-300' : 'text-gray-500'}`}>Register new staff members</p>
          <button className="mt-4 bg-green-500 text-white px-6 py-2 rounded-lg flex items-center justify-center space-x-2 w-full shadow-sm">
    
            <span>Add Staff</span>
          </button>
        </div>
        <div className={`p-5 ${colorMode === 'dark' ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg`}>
          <h3 className={`text-lg font-semibold ${colorMode === 'dark' ? 'text-white' : 'text-gray-800'}`}>Assign Tasks</h3>
          <p className={`text-sm ${colorMode === 'dark' ? 'text-gray-300' : 'text-gray-500'}`}>Manage service bookings</p>
          <button className="mt-4 bg-green-500 text-white px-6 py-2 rounded-lg flex items-center justify-center space-x-2 w-full shadow-sm">
        
            <span>View Tasks</span>
          </button>
        </div>
        <div className={`p-5 ${colorMode === 'dark' ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg`}>
          <h3 className={`text-lg font-semibold ${colorMode === 'dark' ? 'text-white' : 'text-gray-800'}`}>Staff Schedule</h3>
          <p className={`text-sm ${colorMode === 'dark' ? 'text-gray-300' : 'text-gray-500'}`}>Manage work timings</p>
          <button className="mt-4 bg-green-500 text-white px-6 py-2 rounded-lg flex items-center justify-center space-x-2 w-full shadow-sm">
 
            <span>View Schedule</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StaffManagement;