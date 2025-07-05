import React from "react";

// User Views

// Auth Views
import SignIn from "views/auth/SignIn";

// Icons
import { MdHome, MdLock } from "react-icons/md";
import Dashboard from "views/user/dashboard/components";

const routes = [
  {
    name: "Sample Page",
    layout: "/",
    path: "",
    icon: <MdHome className="h-6 w-6" />,
    component: <Dashboard/>,
  },
  
  {
    name: "Sign In",
    layout: "/auth",
    path: "sign-in",
    icon: <MdLock className="h-6 w-6" />,
    component: <SignIn />,
  }
];

export default routes;
