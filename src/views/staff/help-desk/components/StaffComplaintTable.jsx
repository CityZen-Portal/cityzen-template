import React from 'react';
import StaffRow from './StaffRow';
import { FaTable } from 'react-icons/fa';

const StaffComplaintTable = ({ complaints, setComplaints, filterStatus }) => {
  const filteredComplaints = filterStatus
    ? complaints.filter(complaint => complaint.status === filterStatus)
    : complaints;

  return (
    <div className="overflow-x-auto rounded-lg shadow-sm">
      <table className="min-w-full table-auto border border-gray-300 dark:border-gray-700">
        <thead className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white">
          <tr>
            <th className="p-3 border flex items-center"><FaTable className="mr-2" /> ID</th>
            <th className="p-3 border">Subject</th>
            <th className="p-3 border">Department</th>
            <th className="p-3 border">Date Logged</th>
            <th className="p-3 border">Location</th>
            <th className="p-3 border">Status</th>
            <th className="p-3 border">View</th>
            <th className="p-3 border">Resolution</th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
          {filteredComplaints.length === 0 ? (
            <tr>
              <td colSpan="8" className="text-center py-6 text-gray-500 dark:text-gray-400">
                No requests to display.
              </td>
            </tr>
          ) : (
            filteredComplaints.map((complaint) => (
              <StaffRow key={complaint.id} complaint={complaint} setComplaints={setComplaints} />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default StaffComplaintTable;