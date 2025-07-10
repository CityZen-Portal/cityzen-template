import React, { useState } from 'react';
import PageNavigator from './PageNavigator';
import Rows from './Rows';
import '../pages/ComplaintLog/ComplaintLog.css'

const ComplaintTable = ({ complaints }) => {
  const [statusFilter, setStatusFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'in-progress': return 'bg-blue-100 text-blue-800';
      case 'completed': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'pending': return 'Pending';
      case 'in-progress': return 'In Progress';
      case 'completed': return 'Completed';
      default: return status.charAt(0).toUpperCase() + status.slice(1);
    }
  };

  const filteredComplaints = statusFilter
    ? complaints.filter(c => c.status.toLowerCase() === statusFilter.toLowerCase())
    : complaints;

  const totalPages = Math.ceil(filteredComplaints.length / rowsPerPage);
  const paginatedComplaints = filteredComplaints.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
      {/* Filter Dropdown */}
      <div className="mb-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <label htmlFor="statusFilter" className="block text-sm font-medium text-gray-700 dark:text-white mb-2">
            Filter by Status
          </label>
          <select
            id="statusFilter"
            value={statusFilter}
            onChange={(e) => {
              setStatusFilter(e.target.value);
              setCurrentPage(1);
            }}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          >
            <option value="">All</option>
            <option value="pending">Pending</option>
            <option value="under-review">Under Review</option>
            <option value="assigned">Assigned</option>
            <option value="in-progress">In Progress</option>
            <option value="on-hold">On Hold</option>
            <option value="resolved">Resolved</option>
            <option value="closed">Closed</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>

        {/* Rows Per Page */}
        <div>
          <label htmlFor="rowsPerPage" className="block text-sm font-medium text-gray-700 dark:text-white mb-2">
            Rows per page
          </label>
          <select
            id="rowsPerPage"
            value={rowsPerPage}
            onChange={(e) => {
              setRowsPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          >
            {[5, 10, 25, 50].map(num => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-100 dark:bg-gray-700">
            <tr>
              {['Complaint ID', 'Subject', 'Department', 'Location', 'Date Logged', 'Status', 'Actions'].map((heading, idx) => (
                <th key={idx} className="px-6 py-4 text-left text-sm font-medium text-gray-700 dark:text-white border-r last:border-r-0">
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
            <Rows 
              paginatedComplaints={paginatedComplaints}
              getStatusColor={getStatusColor}
              getStatusText={getStatusText}
            />
            {paginatedComplaints.length === 0 && (
              <tr>
                <td colSpan="7" className="text-center py-6 text-gray-500 dark:text-gray-300">
                  No complaints match this status.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <PageNavigator
        filteredComplaints={filteredComplaints}
        rowsPerPage={rowsPerPage}
        currentPage={currentPage}
        totalPages={totalPages}
        handlePageChange={handlePageChange}
        pageNumbers={pageNumbers}
      />
    </div>
  );
};

export default ComplaintTable;
