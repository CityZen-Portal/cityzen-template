import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import UserLayout from "layouts/user";
import AdminLayout from "layouts/admin";
import AuthLayout from "layouts/auth";
const App = () => {
  
  return (
    <Routes>
      <Route path="/*" element={<UserLayout />} />
      <Route path="auth/*" element={<AuthLayout />} />
      <Route path="admin/*" element={<AdminLayout />} />
    </Routes>
  );
};

export default App;
