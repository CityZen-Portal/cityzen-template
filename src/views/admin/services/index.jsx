import React, { useState } from 'react';
import ServiceManagement from './component/ServiceManagement';
import StaffManagement from './component/StaffManagement';
import FeedbackAnalytics from './component/FeedbackAnalytics';
import ManageServices from './component/ManageServices';
import ManageStaffs from './component/ManageStaffs';
import ViewTasks from './component/ViewTasks';
import ViewSchedule from './component/ViewSchedule';

const AdminServices = () => {
  const [view, setView] = useState('main');

  return (
    <div className="p-6 space-y-8 min-h-screen bg-gray-50 text-gray-900 dark:bg-navy-700">
      {view === 'main' && (
        <>
          <ServiceManagement onManageClick={() => setView('manageServices')} />
          <StaffManagement
            onAddStaffs={() => setView('manageStaffs')}
            onViewTasks={() => setView('viewTasks')}
            onViewSchedule={() => setView('viewSchedule')}
          />
          <FeedbackAnalytics />
        </>
      )}

      {view === 'manageServices' && (
        <ManageServices goBack={() => setView('main')} />
      )}

      {view === 'manageStaffs' && (
        <ManageStaffs goBack={() => setView('main')} />
      )}

      {view === 'viewTasks' && (
        <ViewTasks goBack={() => setView('main')} />
      )}

      {view === 'viewSchedule' && (
        <ViewSchedule goBack={() => setView('main')} />
      )}
    </div>
  );
};

export default AdminServices;
