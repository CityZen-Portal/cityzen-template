import React from 'react';
import { MdVisibility, MdEdit } from "react-icons/md";
import Button from './Button';
import '../pages/ComplaintLog/ComplaintLog.css'

const Rows = ({ paginatedComplaints, getStatusColor, getStatusText, changePage }) => {
  return (
    <>
      {paginatedComplaints.map((complaint) => (
        <tr key={complaint.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
          <td className="px-6 py-4 text-sm text-gray-900 dark:text-white border-r">{complaint.id}</td>
          <td className="px-6 py-4 text-sm text-gray-900 dark:text-white border-r">{complaint.subject}</td>
          <td className="px-6 py-4 text-sm text-gray-900 dark:text-white border-r">{complaint.department}</td>
          <td className="px-6 py-4 text-sm text-gray-900 dark:text-white border-r">{complaint.location}</td>
          <td className="px-6 py-4 text-sm text-gray-900 dark:text-white border-r">{complaint.dateLogged}</td>
          <td className="px-6 py-4 border-r">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(complaint.status)}`}>
              {getStatusText(complaint.status)}
            </span>
          </td>
          <td className="flex px-3 py-4 gap-2 max-w-min">
            <Button Icon={MdVisibility} text={'View'} />
            <Button Icon={MdEdit} text={'Edit'} onclick={() => changePage("Assign Staff")} />
          </td>
        </tr>
      ))}
    </>
  );
};

export default Rows;
