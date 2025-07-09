import React from "react";

// Citizen Views
import CitizenDashboard from "views/citizen/dashboard/components";
import Service from "views/citizen/services";
// Admin Views
import AdminDashboard from "views/admin/default";
import AdminTables from "views/admin/tables";
import AdminProfile from "views/admin/profile";
import AdminServices from "views/admin/services/index.jsx";
// Staff Views
import StaffDashboard from "views/staff/dashboard";
import ManageServices from "views/admin/services/component/ManageServices";
// Auth Views
import SignUp from "views/auth/Signup/get-started";

// Icons
import { MdHome, MdLock, MdPerson, MdDashboard, MdTableView, MdAdminPanelSettings } from "react-icons/md";

const routes = [
  // Citizen Routes
  {
    name: "Citizen Dashboard",
    layout: "/citizen",
    path: "dashboard",
    icon: <MdHome className="h-6 w-6" />,
    component: <CitizenDashboard/>,
  },
  {
    name: "Services",
    layout: "/citizen",
    path: "Services",
    icon: <MdHome className="h-6 w-6" />,
    component: <Service/>,
  },
  // Admin Routes
  {
    name: "Admin Dashboard",
    layout: "/admin",
    path: "default",
    icon: <MdDashboard className="h-6 w-6" />,
    component: <AdminDashboard />,
  },
    {
    name: "Admin Services",
    layout: "/admin",
    path: "services",
    icon: <MdDashboard className="h-6 w-6" />,
    component: <AdminServices />,
  },

  // Staff Routes
  {
    name: "Staff Dashboard",
    layout: "/staff",
    path: "dashboard",
    icon: <MdAdminPanelSettings className="h-6 w-6" />,
    component: <StaffDashboard />,
  },
  
  // Auth Routes
  

  {
    name: "Sign Up",
    layout: "/auth",
    path: "sign-up",
    icon: <MdLock className="h-6 w-6" />,
    component: <SignUp />,
  }
];

export default routes;
