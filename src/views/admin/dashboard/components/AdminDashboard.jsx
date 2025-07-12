import React from "react";
import Calendar from "react-calendar";
import {
  FaHome,
  FaBullhorn,
  FaWrench,
  FaUsers,
  FaBell,
  FaSignOutAlt,
} from "react-icons/fa";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "react-calendar/dist/Calendar.css";
import MiniCalendar from "components/calendar/MiniCalendar";

const cardStyle =
  "bg-white rounded-2xl shadow-md p-4 flex flex-col items-start gap-1";

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

export default function AdminDashboard() {
  return (
    <div className="bg-slate-70 flex min-h-screen font-sans">
      {/* Main Content */}
      <div
        className="flex-1 p-6"
      
      >
        <div className="mb-6 grid grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-3">
          <div className={cardStyle}>
            <div className="text-sm text-gray-500">Grievences Raised</div>
            <div className="text-xl font-semibold">0</div>
          </div>
          <div className={cardStyle}>
            <div className="text-sm text-gray-500">Resolved Complaints</div>
            <div className="text-xl font-semibold">0</div>
          </div>
          <div className={cardStyle}>
            <div className="text-sm text-gray-500">Service Requests</div>
            <div className="text-xl font-semibold">0</div>
          </div>
          <div className={cardStyle}>
            <div className="text-sm text-gray-500">Feedback Recieved</div>
            <div className="text-xl font-semibold">0</div>
          </div>
          <div className={cardStyle}>
            <div className="text-sm text-gray-500">Staff Tasks</div>
            <div className="text-xl font-semibold">0</div>
          </div>
          <div className={cardStyle}>
            <div className="text-sm text-gray-500">Citizen Registered</div>
            <div className="text-xl font-semibold">0</div>
          </div>
        </div>
        {/* CORDS */}
        <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-3">
          {/* View Complaints */}
          <div className="h-40 rounded-2xl bg-white p-6 shadow-md">
            <h2 className="mb-2 text-xl font-semibold text-indigo-600">
              View Complaints
            </h2>
            <p className="text-gray-700">
              Monitor all citizen grievances raised across departments. Track
              pending, resolved, and escalated issues.
            </p>
          </div>

          {/* View Requests */}
          <div className="h-40 rounded-2xl bg-white p-6 shadow-md">
            <h2 className="mb-2 text-xl font-semibold text-indigo-600">
              View Requests
            </h2>
            <p className="text-gray-700">
              Access all public service requests including electricity, water,
              sanitation, and more. Assign tasks to staff.
            </p>
          </div>

          {/* User Engagement */}
          <div className="h-40 rounded-2xl bg-white p-6 shadow-md">
            <h2 className="mb-2 text-xl font-semibold text-indigo-600">
              User Engagement
            </h2>
            <p className="text-gray-700">
              Analyze how citizens interact with the portal through feedback,
              service usage, and alert responses.
            </p>
          </div>
        </div>

        <div className="md:w-96">
          <MiniCalendar />
        </div>
      </div>
    </div>
  );
}
