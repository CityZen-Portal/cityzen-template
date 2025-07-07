import React from 'react';

const FeedbackAnalytics = ({ colorMode }) => {
  return (
    <div className={`${colorMode === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border rounded-xl p-6`}>
      <h2 className={`text-2xl font-bold ${colorMode === 'dark' ? 'text-white' : 'text-gray-800'} mb-6 flex items-center`}>
        <span className="material-icons mr-2">analytics</span>
        Feedback & Analytics
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className={`p-5 ${colorMode === 'dark' ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg`}>
          <h3 className={`text-lg font-semibold ${colorMode === 'dark' ? 'text-white' : 'text-gray-800'}`}>Customer Feedback</h3>
          <p className={`text-sm ${colorMode === 'dark' ? 'text-gray-300' : 'text-gray-500'}`}>View and manage feedback</p>
          <button className="mt-4 bg-purple-500 text-white px-6 py-2 rounded-lg flex items-center justify-center space-x-2 w-full shadow-sm">

            <span>View Feedback</span>
          </button>
        </div>
        <div className={`p-5 ${colorMode === 'dark' ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg`}>
          <h3 className={`text-lg font-semibold ${colorMode === 'dark' ? 'text-white' : 'text-gray-800'}`}>Service Analytics</h3>
          <p className={`text-sm ${colorMode === 'dark' ? 'text-gray-300' : 'text-gray-500'}`}>Performance metrics and reports</p>
          <button className="mt-4 bg-purple-500 text-white px-6 py-2 rounded-lg flex items-center justify-center space-x-2 w-full shadow-sm">
         
            <span>View Analytics</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedbackAnalytics;