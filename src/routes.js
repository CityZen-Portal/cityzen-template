import React from "react";

// Citizen Views
import CitizenDashboard from "./views/citizen/dashboard/index";
import Service from "views/citizen/services";
import HelpDesk from "views/citizen/help-desk";
import ComplaintForm from "views/citizen/help-desk/pages/ComplaintForm";
import ComplaintLog from "views/citizen/help-desk/pages/ComplaintLog";
import HelpDesk from "views/citizen/help-desk";
// Admin Views
import AdminDashboard from "views/admin/default";
import AdminTables from "views/admin/tables";
import AdminProfile from "views/admin/profile";
import AdminServices from "views/admin/services/index.jsx";
import ManageStaffs from "views/admin/services/component/ManageStaffs";
import ViewTasks from "views/admin/services/component/ViewTasks";
import ViewSchedule from "views/admin/services/component/ViewSchedule";
import ComplaintManagement from "views/admin/complaints";
// Staff Views
import StaffDashboard from "views/staff/dashboard";

import ManageServices from "views/admin/services/component/ManageServices";
import CityNews from "views/staff/news";
import StaffService from "views/staff/services";

import AddNews from "views/staff/news/components/AddNews";
import ViewNews from "views/staff/news/components/ViewNews";

import NewsUpdate from "views/citizen/news/components/NewsUpdate"
// Auth Views
import SignUp from "views/auth/Signup/get-started";

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
  MdAssignment,
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
    name: "Services",
    layout: "/citizen",
    path: "Services",
    icon: <MdHome className="h-6 w-6" />,
    component: <Service />,
  },
  // Help Desk
  {
    name: "Help Desk",
    layout: "/citizen",
    path: "help-desk",
    icon: <MdLiveHelp className="h-6 w-6" />,
    component: <HelpDesk />,
    // Define nested routes for Citizen Help Desk
    children: [
      {
        name: "Complaint Form",
        layout: "/citizen",
        path: "help-desk/complaint/form",
        component: <ComplaintForm />
      },
      {
        name: "Complaint Log",
        layout: "/citizen",
        path: "help-desk/complaint/log",
        component: <ComplaintLog />
      }
    ]
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
  {
    name: "Complaint Management",
    layout: "/admin",
    path: "complaint-management",
    icon: <MdAssignment className="h-6 w-6" />,
    component: <ComplaintManagement />,
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
      },
      {
        name: "Edit News ",
        layout: "/staff",
        path: "news/add/:id",
        component: <AddNews/>
      }
    ]
  }
  ,
 {
    name: "News Update",
    layout: "/citizen",
    path: "newsupdate",
    icon: <MdLock className="h-6 w-6" />,
    component: <NewsUpdate/>,
  },
  

  // Auth Routes
  

  {
    name: "Sign Up",
    layout: "/auth",
    path: "sign-up",
    icon: <MdLock className="h-6 w-6" />,
    component: <SignIn />,
  },
];

export default routes;
