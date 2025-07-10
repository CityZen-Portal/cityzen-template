import React from 'react'
import { MdVisibility, MdEdit } from "react-icons/md";
import Button from './Button';

const Row = ({ complaint, getStatusColor, getStatusText}) => {
  return (
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
        <Button Icon={MdVisibility} text={'View'} key={`view-${complaint.id}`} link={`/admin/complaints/view/${complaint.id}`} />
        <Button Icon={MdEdit} text={'Edit'} key={`update-${complaint.id}`} link={`/admin/complaints/update/${complaint.id}`} />
        </td>
    </tr>
  )
}

export default Row