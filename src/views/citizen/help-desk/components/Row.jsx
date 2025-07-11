import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MdVisibility } from 'react-icons/md';
import Button from './Button';

const Row = ({ complaint, getStatusColor, getStatusText, link }) => {
  const navigate = useNavigate()
  return (
    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
      <td className="px-6 py-4 text-sm text-gray-900 dark:text-white border-r">{complaint.id}</td>
      <td className="px-6 py-4 text-sm text-gray-900 dark:text-white border-r">{complaint.issue}</td>
      <td className="px-6 py-4 text-sm text-gray-900 dark:text-white border-r">{complaint.department}</td>
      <td className="px-6 py-4 text-sm text-gray-900 dark:text-white border-r">{complaint.dateLogged}</td>
      <td className="px-6 py-4 border-r">
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(complaint.status)}`}>
          {getStatusText(complaint.status)}
        </span>
      </td>
      <td className="px-6 py-4 dark:text-white border-r">
        <Button Icon={MdVisibility} text={'View'} key={`view-${complaint.id}`} link={`/citizen/help-desk/complaint/view/${complaint.id}`} />
      </td>

      <td className="px-6 py-4">
        <button
          onClick={() => {
            navigate(link);
            window.scrollTo(0, 0);
          }}
          disabled={complaint.status !== 'resolved'}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
            complaint.status === 'resolved'
              ? 'bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600'
              : 'bg-gray-300 text-gray-500 dark:bg-gray-700 dark:text-gray-400 cursor-not-allowed'
          }`}
        >
          Give Feedback
        </button>
      </td>
    </tr>
  );
};

export default Row;
