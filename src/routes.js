import React from "react";

// Citizen Views
import CitizenDashboard from "./views/citizen/dashboard/index";
import Service from "views/citizen/services";
import Grievance_Management from "views/citizen/grievance-management";
// Admin Views
import AdminDashboard from "views/admin/default";
import AdminTables from "views/admin/tables";
import AdminProfile from "views/admin/profile";
import AdminServices from "views/admin/services/index.jsx";
import ManageStaffs from "views/admin/services/component/ManageStaffs";
import ViewTasks from "views/admin/services/component/ViewTasks";
import ViewSchedule from "views/admin/services/component/ViewSchedule";
// Staff Views
import StaffDashboard from "views/staff/dashboard";

import ManageServices from "views/admin/services/component/ManageServices";
import CityNews from "views/staff/news";
import StaffService from "views/staff/services";
import AddNews from "views/staff/news/components/AddNews";
import ViewNews from "views/staff/news/components/ViewNews";
// Auth Views
import SignIn from "views/auth/SignIn";

// Icons

import {
  MdHome,
  MdLock,
  MdPerson,
  MdDashboard,
  MdTableView,
  MdAdminPanelSettings,
  MdChatBubble,
  MdLiveHelp,
} from "react-icons/md";

const routes = [
  // Citizen Routes
  {
    name: " Dashboard",
    layout: "/citizen",
    path: "dashboard",
    icon: <MdDashboard className="h-6 w-6" />,
    component: <CitizenDashboard />,
  },

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
    component: <Service />,
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
    // Define nested routes for Admin Services
    children: [
      {
        name: "Manage Services",
        layout: "/admin",
        path: "services/manage",
        component: <ManageServices />
      },
      {
        name: "Manage Staff",
        layout: "/admin",
        path: "services/staff",
        component: <ManageStaffs />
      },
      {
        name: "View Tasks",
        layout: "/admin",
        path: "services/tasks",
        component: <ViewTasks />
      },
      {
        name: "View Schedule",
        layout: "/admin",
        path: "services/schedule",
        component: <ViewSchedule />
      }
    ]
  },

  // Staff Routes
  {
    name: "Staff Dashboard",
    layout: "/staff",
    path: "dashboard",
    icon: <MdAdminPanelSettings className="h-6 w-6" />,
    component: <StaffDashboard />,
  },

  {
    name: "Service Requests",
    layout: "/staff",
    path: "services",
    icon: <MdTableView className="h-6 w-6" />,
    component: <StaffService />,
  },
  {
    name: "City News & Alerts",
    layout: "/staff",
    path: "news",
    icon: <MdChatBubble className="h-6 w-6" />,
    component: <CityNews/>,
    children: [
      {
        name: "Manage News",
        layout: "/staff",
        path: "news/add",
        component: <AddNews/>
      }
    ]
  }
  ,

  // Auth Routes
  {
    name: "Sign In",
    layout: "/auth",
    path: "sign-in",
    icon: <MdLock className="h-6 w-6" />,
    component: <SignIn />,
  },
];

export default routes;
