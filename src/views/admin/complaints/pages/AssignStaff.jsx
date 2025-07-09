import React, { useState } from 'react';
const staffList = [
  { id: 1, name: 'Alice Johnson' },
  { id: 2, name: 'Bob Smith' },
  { id: 3, name: 'Charlie Lee' },
];

export default function AssignStaff({ complaint, changePage }) {
  const [assignedStaff, setAssignedStaff] = useState(complaint?.assignedStaff || '');

  const handleAssign = (e) => {
    setAssignedStaff(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!assignedStaff) return alert('Please select a staff member to assign.');
    console.log(`Assigned staff ID: ${assignedStaff} for complaint ID: ${complaint.id}`);
    alert('Staff assigned successfully!');
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gray-100 dark:bg-navy-900 py-10">
      <div className="absolute top-6 left-6">
        <button
          onClick={() => changePage('/services')}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 shadow-md"
        >
          ← Back
        </button>
      </div>

      <div className="bg-gray-50 dark:bg-gray-900 max-w-xl w-full p-6 rounded-xl shadow-md text-black dark:text-white">
        <h1 className="font-bold text-center text-xl mb-4">Complaint</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <h2 className="font-bold text-center">Location & Address</h2>

          <div>
            <label className="block font-bold">Complaint ID</label>
            <input
              type="text"
              value={complaint?.id || '0001'}
              disabled
              className="w-full border px-4 py-2 rounded-md bg-gray-200 text-gray-800"
            />
          </div>

          <div>
            <label className="block font-bold">Location</label>
            <input
              type="text"
              value={complaint?.location}
              disabled
              className="w-full border px-4 py-2 rounded-md bg-gray-200 text-gray-800"
            />
          </div>

          <div>
            <label className="block font-bold">Address</label>
            <input
              type="text"
              value={complaint?.address}
              disabled
              className="w-full border px-4 py-2 rounded-md bg-gray-200 text-gray-800"
            />
          </div>

          <div>
            <label className="block font-bold">Ward Number</label>
            <input
              type="text"
              value={complaint?.wardNumber}
              disabled
              className="w-full border px-4 py-2 rounded-md bg-gray-200 text-gray-800"
            />
          </div>

          <div>
            <label className="block font-bold">Pincode</label>
            <input
              type="text"
              value={complaint?.pincode}
              disabled
              className="w-full border px-4 py-2 rounded-md bg-gray-200 text-gray-800"
            />
          </div>

          <h2 className="font-bold text-center pt-4">Complaint Details</h2>

          <div>
            <label className="block font-bold">Complaint Type</label>
            <input
              type="text"
              value={complaint?.complaintType}
              disabled
              className="w-full border px-6 py-2 rounded-md bg-gray-200 text-gray-800"
            />
          </div>

          {complaint?.complaintType === 'Other' && (
            <div>
              <label className="block font-bold">Please specify the issue</label>
              <textarea
                rows="3"
                value={complaint?.others}
                disabled
                className="w-full border px-4 py-2 rounded-md bg-gray-200 text-gray-800"
              ></textarea>
            </div>
          )}

          <div>
            <label className="block font-bold">Issue</label>
            <input
              type="text"
              value={complaint?.title}
              disabled
              className="w-full border px-4 py-2 rounded-md bg-gray-200 text-gray-800"
            />
          </div>

          <div>
            <label className="block font-bold">Description</label>
            <textarea
              rows="4"
              value={complaint?.description}
              disabled
              className="w-full border px-4 py-2 rounded-md bg-gray-200 text-gray-800"
            ></textarea>
          </div>

          <div>
            <label className="block font-bold mb-1">Uploaded PDF</label>
            {complaint?.imageFileUrl ? (
              <iframe
                src={complaint.imageFileUrl}
                title="Uploaded PDF"
                className="w-full h-64 border rounded-md bg-white"
              ></iframe>
            ) : (
              <p className="text-sm text-red-600">No PDF uploaded</p>
            )}
          </div>

          <div>
            <label className="block font-bold">Assign Staff</label>
            <select
              value={assignedStaff}
              onChange={handleAssign}
              className="w-full border px-4 py-2 rounded-md bg-white text-gray-800"
            >
              <option value="">-- Select Staff --</option>
              {staffList.map((staff) => (
                <option key={staff.id} value={staff.id}>
                  {staff.name}
                </option>
              ))}
            </select>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white font-bold px-6 py-2 rounded-md hover:bg-blue-700"
            >
              Assign 
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
