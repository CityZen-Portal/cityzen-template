import React from "react";
import Calendar from "react-calendar";
import { FaHome, FaBullhorn, FaWrench, FaUsers, FaBell, FaSignOutAlt } from "react-icons/fa";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import 'react-calendar/dist/Calendar.css';

const cardStyle = "bg-white rounded-2xl shadow-md p-4 flex flex-col items-start gap-1";

const dataLine = [
  { name: "JAN", uv: 450, pv: 600 },
  { name: "FEB", uv: 750, pv: 500 },
  { name: "MAR", uv: 620, pv: 530 },
  { name: "APR", uv: 680, pv: 490 },
  { name: "MAY", uv: 700, pv: 550 },
  { name: "JUN", uv: 730, pv: 570 },
  { name: "JUL", uv: 690, pv: 520 },
  { name: "AUG", uv: 710, pv: 540 },
  { name: "SEP", uv: 640, pv: 510 },
  { name: "OCT", uv: 600, pv: 480 },
  { name: "NOV", uv: 580, pv: 460 },
  { name: "DEC", uv: 660, pv: 500 },
];

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-slate-70 font-sans">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg p-6 flex flex-col gap-20">
        <div className="flex justify-center text-3xl font-bold text-black-600">CityZen</div>
        <hr className="w-full border-t border-gray-400" />
        <nav className="flex flex-col gap-4 text-l">
  <a href="#" className="flex items-center gap-2 text-indigo-600 font-medium">
    <FaHome /> Main Dashboard
  </a>
  <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-indigo-500">
    <FaBullhorn /> Grievances
  </a>
  <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-indigo-500">
    <FaWrench /> Service Requests
  </a>
  <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-indigo-500">
    <FaUsers /> Citizen Records
  </a>
  <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-indigo-500">
    <FaBell /> City Alerts
  </a>
  <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-indigo-500">
    <FaSignOutAlt /> Sign Out
  </a>
</nav>

      </div>

      {/* Main Content */}
      <div className="flex-1 p-6" style={{ backgroundColor: 'rgb(244 247 254)' }}>
         <a class="text-sm font-normal text-navy-700 hover:underline dark:text-white dark:hover:text-white" href="_">
  Pages
  <span class="mx-1 text-sm text-navy-700 hover:text-navy-700 dark:text-white dark:text-white">/</span>
</a>
<a class="text-sm font-normal capitalize text-navy-700 hover:underline dark:text-white dark:hover:text-white" href="/horizon-tailwind-react/admin/default">
  Main Dashboard
</a>

        <div className="text-3xl font-bold mb-4">Main Dashboard</div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 mb-6">
          <div className={cardStyle}><div className="text-sm text-gray-500">Grievences Raised</div><div className="text-xl font-semibold">0</div></div>
          <div className={cardStyle}><div className="text-sm text-gray-500">Resolved Complaints</div><div className="text-xl font-semibold">0</div></div>
          <div className={cardStyle}><div className="text-sm text-gray-500">Service Requests</div><div className="text-xl font-semibold">0</div></div>
          <div className={cardStyle}><div className="text-sm text-gray-500">Feedback Recieved</div><div className="text-xl font-semibold">0</div></div>
          <div className={cardStyle}><div className="text-sm text-gray-500">Staff Tasks</div><div className="text-xl font-semibold">0</div></div>
          <div className={cardStyle}><div className="text-sm text-gray-500">Citizen Registered</div><div className="text-xl font-semibold">0</div></div>
        </div>
        {/* CORDS */}
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 mb-6">

  {/* View Complaints */}
  <div className="bg-white rounded-2xl shadow-md p-6 h-40">
    <h2 className="text-xl font-semibold text-indigo-600 mb-2">View Complaints</h2>
    <p className="text-gray-700">
      Monitor all citizen grievances raised across departments. Track pending, resolved, and escalated issues.
    </p>
  </div>

  {/* View Requests */}
  <div className="bg-white rounded-2xl shadow-md p-6 h-40">
    <h2 className="text-xl font-semibold text-indigo-600 mb-2">View Requests</h2>
    <p className="text-gray-700">
      Access all public service requests including electricity, water, sanitation, and more. Assign tasks to staff.
    </p>
  </div>

  {/* User Engagement */}
  <div className="bg-white rounded-2xl shadow-md p-6 h-40">
    <h2 className="text-xl font-semibold text-indigo-600 mb-2">User Engagement</h2>
    <p className="text-gray-700">
      Analyze how citizens interact with the portal through feedback, service usage, and alert responses.
    </p>
  </div>

</div>

        {/* Line Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
          <div className="bg-white rounded-2xl shadow-md p-6">
            <div className="text-xl font-semibold mb-4">📈 Monthly Citizen Activity</div>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={dataLine}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="uv" stroke="#6C5DD3" strokeWidth={3} />
                <Line type="monotone" dataKey="pv" stroke="#00C9FF" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Calendar */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <div className="text-xl font-semibold mb-4">📅 City Events Calendar</div>
            <Calendar className="w-full" />
          </div>
        </div>

      </div>
    </div>
  );
}
