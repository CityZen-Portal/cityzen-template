import React from 'react';
import { MdVisibility, MdEdit } from 'react-icons/md';
import { FaEye } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


const Row = ({ complaint, getStatusColor, getStatusText }) => {
  const navigate = useNavigate();

  return (
    <tr key={complaint.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
      <td className="px-6 py-4 text-sm text-gray-900 dark:text-white border-r">{complaint.id}</td>
      <td className="px-6 py-4 text-sm text-gray-900 dark:text-white border-r">{complaint.issue}</td>
      <td className="px-6 py-4 text-sm text-gray-900 dark:text-white border-r">{complaint.department}</td>
      <td className="px-6 py-4 text-sm text-gray-900 dark:text-white border-r">{complaint.location}</td>
      <td className="px-6 py-4 text-sm text-gray-900 dark:text-white border-r">{complaint.dateLogged}</td>

      {/* Status + Edit Button */}
      <td className="px-6 py-4 text-sm text-gray-900 dark:text-white border-r">
        <div className="flex items-center justify-between gap-2">
          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(complaint.status)}`}>
            {getStatusText(complaint.status)}
          </span>
          <button
            onClick={() => navigate(`/admin/complaints/update/${complaint.id}`)}
            className="px-2 py-1 bg-blue-1000 text-white rounded-md hover:bg-blue-700 text-xs inline-flex items-center transition-colors duration-200"
            title="Edit"
          >
            <MdEdit className="text-sm" />
          </button>
        </div>
      </td>
      

      {/* View Button */}
      {/* <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">
        <Button
          Icon={MdVisibility}
          text=""
          link={`/admin/complaints/view/${complaint.id}`}
        />
      </td> */}
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
              <button 
                onClick={() => navigate(`/admin/complaints/view/${complaint.id}`)}
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center text-sm transition-colors duration-200">
                <FaEye className="mr-1 text-xs" /> View
              </button>
            </td>
    </tr>
  );
};

export default Row;
