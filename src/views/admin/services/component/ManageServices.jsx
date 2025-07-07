import React from 'react';

const ManageServices = ({ goBack }) => {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-300">
      <button onClick={goBack} className="text-blue-500 mb-4 underline">← Back</button>
      <h2 className="text-2xl font-bold mb-4">Manage Services</h2>
      {/* Add your service management form or UI here */}
    </div>
  );
};

export default ManageServices;
