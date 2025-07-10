import Rows from './Rows';

const ComplaintTable = ({ complaints, changePage }) => {

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'inprogress':
        return 'bg-blue-100 text-blue-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'pending':
        return 'Pending';
      case 'inprogress':
        return 'In Progress';
      case 'completed':
        return 'Completed';
      default:
        return status;
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-100 dark:bg-gray-700">
            <tr>
              {['Complaint ID', 'Subject', 'Department', 'Date Logged', 'Status', 'Feedback'].map((heading, idx) => (
                <th
                  key={idx}
                  className="px-6 py-4 text-left text-sm font-medium text-gray-700 dark:text-white border-r last:border-r-0"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
            {complaints.map((complaint) => (
              <Rows
                key={complaint.id}
                complaint={complaint}
                getStatusColor={getStatusColor}
                getStatusText={getStatusText}
                changePage={changePage}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComplaintTable;
