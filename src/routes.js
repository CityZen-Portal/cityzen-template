import React from "react";

// Citizen Views
import CitizenDashboard from "views/citizen/dashboard/components";
import Service from "views/citizen/services";
import Grievance_Management from "views/citizen/grievance-management";
// Admin Views
import AdminDashboard from "views/admin/default";
import AdminTables from "views/admin/tables";
import AdminProfile from "views/admin/profile";

// Staff Views
import StaffDashboard from "views/staff/dashboard";

// Auth Views
import SignIn from "views/auth/SignIn";

// Icons
import { MdHome, MdLock, MdPerson, MdDashboard, MdTableView, MdAdminPanelSettings, MdLiveHelp } from "react-icons/md";

const routes = [
  // Citizen Routes
  {
    name: "Citizen Dashboard",
    layout: "/citizen",
    path: "dashboard",
    icon: <MdHome className="h-6 w-6" />,
    component: <CitizenDashboard/>,
  },
  // Help Desk
  {
    name: "Help Desk",
    layout: "/citizen",
    path: "help-desk",
    icon: <MdLiveHelp className="h-6 w-6" />,
    component: <Grievance_Management />,
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
    name: "Sign In",
    layout: "/auth",
    path: "sign-in",
    icon: <MdLock className="h-6 w-6" />,
    component: <SignIn />,
  }
];

export default routes;
