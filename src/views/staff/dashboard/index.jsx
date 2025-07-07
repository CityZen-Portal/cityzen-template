import React from 'react';
import Widget from "components/widget/Widget";
import { MdPerson, MdAssignment, MdNotifications } from "react-icons/md";

const StaffDashboard = () => {
  return (
    <div>
      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        <Widget
          icon={<MdPerson className="h-7 w-7" />}
          title={"Active Users"}
          subtitle={"1,482"}
        />
        <Widget
          icon={<MdAssignment className="h-6 w-6" />}
          title={"Pending Tasks"}
          subtitle={"24"}
        />
        <Widget
          icon={<MdNotifications className="h-7 w-7" />}
          title={"Notifications"}
          subtitle={"12"}
        />
      </div>
      
      <div className="mt-5 grid grid-cols-1 gap-5">
        <div className="rounded-xl border-2 border-gray-100 bg-white p-6 dark:border-gray-700 dark:bg-navy-800">
          <h4 className="text-xl font-bold text-navy-700 dark:text-white mb-4">Staff Dashboard</h4>
          <p className="text-base text-gray-600 dark:text-white">
            Welcome to the staff dashboard. This area provides tools and information for staff members to manage daily operations.
          </p>
          <div className="mt-4 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <p className="text-base text-gray-600 dark:text-white">Monitor user activities</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <p className="text-base text-gray-600 dark:text-white">Manage support tickets</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <p className="text-base text-gray-600 dark:text-white">Generate reports</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffDashboard;