import React, { useState } from 'react';
import ServiceManagement from './component/ServiceManagement';
import StaffManagement from './component/StaffManagement';
import FeedbackAnalytics from './component/FeedbackAnalytics';
import ManageServices from './component/ManageServices';

const AdminServices = () => {
  const [view, setView] = useState('main');

  return (
    <div className="p-6 space-y-8 min-h-screen bg-gray-50 text-gray-900">
      {view === 'main' ? (
        <>
          <ServiceManagement onManageClick={() => setView('manage')} />
          <StaffManagement />
          <FeedbackAnalytics />
        </>
      ) : (
        <ManageServices goBack={() => setView('main')} />
      )}
    </div>
  );
};

export default AdminServices;
