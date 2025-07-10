import Footer from "components/footer/FooterAuthDefault";
// import authImg from "assets/img/auth/auth.png";
import { Link, Routes, Route, Navigate } from "react-router-dom";
import routes from "routes.js";
import FixedPlugin from "components/fixedPlugin/FixedPlugin";

export default function Auth() {
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/auth") {
        return (
          <Route path={`/${prop.path}`} element={prop.component} key={key} />
        );
      } else {
        return null;
      }
    });
  };
  document.documentElement.dir = "ltr";
  return (
    <div className="min-h-screen w-full bg-white dark:bg-navy-900 flex flex-col">
      <FixedPlugin />
      <main className="flex-1 w-full min-h-screen flex flex-col justify-center items-center p-0 m-0">
        <div className="w-full min-h-screen flex flex-col">
          <Routes>
            {getRoutes(routes)}
            <Route path="/" element={<Navigate to="/auth/sign-in" replace />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  );
}
