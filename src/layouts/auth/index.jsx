import Footer from "components/footer/FooterAuthDefault";
import { Link, Routes, Route, Navigate, useLocation, useNavigate } from "react-router-dom";
import routes from "routes.js";
import FixedPlugin from "components/fixedPlugin/FixedPlugin";

export default function Auth() {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Full-screen routes that don't need the constrained layout
  const fullScreenRoutes = ['/auth/sign-up'];
  const isFullScreen = fullScreenRoutes.includes(location.pathname);

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

  const handleBackClick = () => {
    navigate(-1); // Navigate to previous page
  };

  // Full-screen layout for get-started and similar pages
  if (isFullScreen) {
    return (
      <div className="min-h-screen w-full bg-white">
        {/* Back Button for full-screen pages */}
        <div className="absolute top-4 left-4 z-10">
          <button 
            onClick={handleBackClick}
            className="flex items-center text-gray-500 hover:text-gray-700 transition-colors p-2 rounded-lg hover:bg-gray-50"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            <span className="text-sm">Back</span>
          </button>
        </div>
        
        <Routes>
          {getRoutes(routes)}
          <Route
            path="/"
            element={<Navigate to="/auth/sign-in" replace />}
          />
        </Routes>
      </div>
    );
  }

  // Constrained layout for traditional auth forms - made smaller
  return (
    <div>
      <div className="relative float-right h-full min-h-screen w-full !bg-white dark:!bg-navy-900">
        <FixedPlugin />
        <main className={`mx-auto min-h-screen`}>
          <div className="relative flex">
            <div className="mx-auto flex min-h-full w-full flex-col justify-start pt-8 md:max-w-[65%] lg:max-w-[800px] lg:px-6 lg:pt-0 xl:min-h-[100vh] xl:max-w-[1000px] xl:px-0 xl:pl-[50px]">
              <div className="mb-auto flex flex-col pl-4 pr-4 md:pr-0 md:pl-8 lg:max-w-[60%] lg:pl-0 xl:max-w-full">
                <button 
                  onClick={handleBackClick}
                  className="mt-0 w-max lg:pt-8 flex items-center text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <svg
                    width="6"
                    height="10"
                    viewBox="0 0 8 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.70994 2.11997L2.82994 5.99997L6.70994 9.87997C7.09994 10.27 7.09994 10.9 6.70994 11.29C6.31994 11.68 5.68994 11.68 5.29994 11.29L0.709941 6.69997C0.319941 6.30997 0.319941 5.67997 0.709941 5.28997L5.29994 0.699971C5.68994 0.309971 6.31994 0.309971 6.70994 0.699971C7.08994 1.08997 7.09994 1.72997 6.70994 2.11997V2.11997Z"
                      fill="#A3AED0"
                    />
                  </svg>
                  <p className="ml-2 text-sm text-gray-600">
                    Back
                  </p>
                </button>
                <Routes>
                  {getRoutes(routes)}
                  <Route
                    path="/"
                    element={<Navigate to="/auth/sign-in" replace />}
                  />
                </Routes>
               
              </div>
              <Footer />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
