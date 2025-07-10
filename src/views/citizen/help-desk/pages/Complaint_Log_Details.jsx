import React, { useState } from 'react';
import { FaMapMarkerAlt, FaExclamationCircle, FaCamera, FaHistory } from 'react-icons/fa';

const ComplaintDetails = ({ complaintId = '0001' }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  
  const [complaintData, setComplaintData] = useState({
    id: '0001',
    subject: 'Water Leakage',
    department: 'Water Resource',
    dateLogged: '19/04/2025',
    status: 'pending',
    location: 'Anna Nagar, Chennai',
    address: '123 Main Street, Anna Nagar',
    wardNumber: '45',
    pincode: '600040',
    complaintType: 'Infrastructure',
    issue: 'There is a severe water leakage in the main pipeline near my house. The water is continuously flowing and causing waterlogging in the area. This has been going on for 3 days now.',
    title: 'Water Pipeline Burst',
    description: 'The main water pipeline has burst near the junction of Anna Nagar main road. Water is flowing continuously causing inconvenience to residents and potential damage to nearby properties.',
    imageUrl: null,
    feedback: '',
    statusHistory: [
      { status: 'Submitted', date: '19/04/2025 10:00 AM', note: 'Complaint received' },
      { status: 'Pending', date: '19/04/2025 10:15 AM', note: 'Assigned to Water Resource team' },
    ]
  });

  const [formData, setFormData] = useState({ ...complaintData });
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleEdit = () => setIsEditing(true);

  const handleSave = () => {
    setComplaintData({ ...formData });
    setIsEditing(false);
    alert('Complaint updated successfully!');
  };

  const handleCancel = () => {
    setFormData({ ...complaintData });
    setIsEditing(false);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUploadedImage(imageUrl);
      setFormData(prev => ({ ...prev, imageUrl }));
    }
  };

  const getStatusColor = (status) => {
    switch(status.toLowerCase()) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'inprogress': return 'bg-blue-100 text-blue-800';
      case 'completed': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status) => {
    switch(status.toLowerCase()) {
      case 'pending': return 'Pending';
      case 'inprogress': return 'In Progress';
      case 'completed': return 'Completed';
      default: return status;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <FaExclamationCircle className="text-3xl text-blue-600" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Complaint #{complaintData.id} - {complaintData.title}
              </h1>
              <p className="text-gray-600 text-sm">Manage your complaint details</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className={`px-4 py-1 rounded-full text-sm font-medium ${getStatusColor(complaintData.status)}`}>
              {getStatusText(complaintData.status)}
            </span>
            {!isEditing ? (
              <button
                onClick={handleEdit}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center"
              >
                <FaExclamationCircle className="mr-2" /> Edit Complaint
              </button>
            ) : (
              <div className="flex space-x-2">
                <button
                  onClick={handleSave}
                  className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                >
                  Save
                </button>
                <button
                  onClick={handleCancel}
                  className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Complaint Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Location Section */}
                <div className="space-y-6">
                  <h2 className="text-lg font-semibold text-gray-900 flex items-center">
                    <FaMapMarkerAlt className="mr-2 text-blue-600" /> Location Details
                  </h2>
                  {['location', 'address', 'wardNumber', 'pincode'].map((field) => (
                    <div key={field}>
                      <label className="block text-sm font-medium text-gray-700 capitalize">
                        {field.replace(/([A-Z])/g, ' $1').trim()}
                      </label>
                      {isEditing ? (
                        <input
                          type="text"
                          value={formData[field]}
                          onChange={(e) => handleInputChange(field, e.target.value)}
                          className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      ) : (
                        <p className="mt-1 text-gray-900">{complaintData[field]}</p>
                      )}
                    </div>
                  ))}
                </div>

                {/* Complaint Details Section */}
                <div className="space-y-6">
                  <h2 className="text-lg font-semibold text-gray-900 flex items-center">
                    <FaExclamationCircle className="mr-2 text-blue-600" /> Complaint Details
                  </h2>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Complaint Type</label>
                    {isEditing ? (
                      <select
                        value={formData.complaintType}
                        onChange={(e) => handleInputChange('complaintType', e.target.value)}
                        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        {['Infrastructure', 'Sanitation', 'Water Supply', 'Electricity', 'Other'].map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    ) : (
                      <p className="mt-1 text-gray-900">{complaintData.complaintType}</p>
                    )}
                  </div>
                  {['issue', 'title', 'description'].map((field) => (
                    <div key={field}>
                      <label className="block text-sm font-medium text-gray-700 capitalize">
                        {field}
                      </label>
                      {isEditing ? (
                        field === 'issue' || field === 'description' ? (
                          <textarea
                            value={formData[field]}
                            onChange={(e) => handleInputChange(field, e.target.value)}
                            rows={field === 'description' ? 4 : 2}
                            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        ) : (
                          <input
                            type="text"
                            value={formData[field]}
                            onChange={(e) => handleInputChange(field, e.target.value)}
                            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        )
                      ) : (
                        <p className="mt-1 text-gray-900">{complaintData[field]}</p>
                      )}
                    </div>
                  ))}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Image</label>
                    {isEditing ? (
                      <div className="mt-1 border-2 border-dashed border-gray-300 rounded-md p-4 text-center">
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          id="file-upload"
                          onChange={handleImageUpload}
                        />
                        <label
                          htmlFor="file-upload"
                          className="cursor-pointer inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                        >
                          <FaCamera className="mr-2" /> Upload Image
                        </label>
                        {uploadedImage && (
                          <p className="mt-2 text-gray-600">Image selected</p>
                        )}
                      </div>
                    ) : (
                      <div className="mt-1">
                        {complaintData.imageUrl ? (
                          <img
                            src={complaintData.imageUrl}
                            alt="Complaint"
                            className="max-w-xs rounded-md cursor-pointer hover:opacity-80"
                            onClick={() => setShowImageModal(true)}
                          />
                        ) : (
                          <p className="text-gray-500 italic">No image uploaded</p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar: Status History & Additional Info */}
          <div className="space-y-6">
            {/* Status History */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <FaHistory className="mr-2 text-blue-600" /> Status History
              </h2>
              <div className="space-y-4">
                {complaintData.statusHistory.map((entry, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      <div className="h-2 w-2 bg-blue-600 rounded-full mt-1.5"></div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{entry.status}</p>
                      <p className="text-sm text-gray-600">{entry.date}</p>
                      <p className="text-sm text-gray-500">{entry.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Information */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Additional Information</h2>
              {['department', 'dateLogged', 'subject'].map((field) => (
                <div key={field} className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 capitalize">
                    {field.replace(/([A-Z])/g, ' $1').trim()}
                  </label>
                  <p className="mt-1 text-gray-900">{complaintData[field]}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Feedback Section */}
        <div className="mt-8 bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Feedback</h2>
          {isEditing ? (
            <textarea
              value={formData.feedback}
              onChange={(e) => handleInputChange('feedback', e.target.value)}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Provide feedback about the complaint resolution..."
            />
          ) : (
            <p className="text-gray-900">{complaintData.feedback || 'No feedback provided'}</p>
          )}
        </div>

        {/* Back Button */}
        <div className="mt-8">
          <button
            onClick={() => window.history.back()}
            className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            Back to Complaint Log
          </button>
        </div>
      </div>

      {/* Image Modal */}
      {showImageModal && complaintData.imageUrl && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-4 max-w-3xl w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Image Preview</h3>
              <button
                onClick={() => setShowImageModal(false)}
                className="text-gray-600 hover:text-gray-900"
              >
                ✕
              </button>
            </div>
            <img
              src={complaintData.imageUrl}
              alt="Complaint"
              className="w-full rounded-md"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ComplaintDetails;