import React, { useState } from 'react';
import { FilterButtons, RequestDetails, CompletionForm, RequestsTable } from './component';
import initialRequests from './variable/sample';

const StaffService = () => {
  const [requests, setRequests] = useState(initialRequests);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [photo, setPhoto] = useState(null);
  console.log(photo);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [formData, setFormData] = useState({
    staffName: "",
    completionDate: new Date().toISOString().split('T')[0],
    suggestion: ""
  });
  const [viewMode, setViewMode] = useState("all");
  const [viewingDetails, setViewingDetails] = useState(null);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handlePhotoChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setPhoto(selectedFile);
      
      const reader = new FileReader();
      reader.onload = (e) => {
        setPhotoPreview(e.target.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleComplete = (id) => {
    const request = requests.find(req => req.id === id);
    setSelectedRequest(request);
    setFormData({
      staffName: "",
      completionDate: new Date().toISOString().split('T')[0],
      suggestion: ""
    });
    setPhoto(null);
    setPhotoPreview(null);
    setViewingDetails(null);
  };

  const handleViewDetails = (request) => {
    setViewingDetails(request);
    setSelectedRequest(null);
  };

  const handleSubmitCompletion = (e) => {
    e.preventDefault();
    if (!selectedRequest || !formData.staffName || !photoPreview) {
      alert("Please fill all required fields and upload a photo");
      return;
    }

    const updatedRequests = requests.map(req => {
      if (req.id === selectedRequest.id) {
        return {
          ...req,
          status: "completed",
          completedDate: formData.completionDate,
          staffName: formData.staffName,
          photo: photoPreview,
          suggestion: formData.suggestion
        };
      }
      return req;
    });

    setRequests(updatedRequests);
    setSelectedRequest(null);
    setPhoto(null);
    setPhotoPreview(null);
    setFormData({
      staffName: "",
      completionDate: new Date().toISOString().split('T')[0],
      suggestion: ""
    });
  };

  const filteredRequests = viewMode === "all" 
    ? requests 
    : viewMode === "pending" 
      ? requests.filter(req => req.status === "pending")
      : requests.filter(req => req.status === "completed");

  return (
    <div className="mt-3">
      <FilterButtons viewMode={viewMode} setViewMode={setViewMode} />
      <RequestsTable 
        viewMode={viewMode}
        filteredRequests={filteredRequests}
        handleViewDetails={handleViewDetails}
        handleComplete={handleComplete}
      />
       <CompletionForm 
        selectedRequest={selectedRequest}
        setSelectedRequest={setSelectedRequest}
        formData={formData}
        handleInputChange={handleInputChange}
        handlePhotoChange={handlePhotoChange}
        photoPreview={photoPreview}
        handleSubmitCompletion={handleSubmitCompletion}
      />
       <RequestDetails 
        viewingDetails={viewingDetails} 
        setViewingDetails={setViewingDetails} 
      />
    </div>
  )
}

export default StaffService
