import React from 'react';
import SignupCitizen from './signup-citizen';
import SignupStaff from './signup-staff';

const GetStarted = () => {
  const [currentView, setCurrentView] = React.useState('welcome'); // 'welcome', 'citizen', 'staff'

  const handleCitizenSignup = () => {
    setCurrentView('citizen');
  };

  const handleStaffSignup = () => {
    setCurrentView('staff');
  };

  const handleBackToWelcome = () => {
    setCurrentView('welcome');
  };

  // Render different components based on current view
  if (currentView === 'citizen') {
    return <SignupCitizen onBack={handleBackToWelcome} />;
  }

  if (currentView === 'staff') {
    return <SignupStaff onBack={handleBackToWelcome} />;
  }
  return (
    <div className="min-h-screen bg-[#f4f7fe] py-6">
      {/* Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1b254b] mb-3">
            Welcome to <span className="text-[#422afb]">CityZen</span>
          </h1>
          <p className="text-lg text-[#a3aed0] max-w-xl mx-auto">
            Your digital gateway to seamless city services. Choose your path to get started.
          </p>
        </div>

        {/* Main Content - Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          
          {/* Citizen Section */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-[#a3aed0] hover:shadow-xl transition-all duration-300 group">
            <div className="text-center">
              {/* Citizen Illustration */}
              <div className="mb-6">
                <div className="w-20 h-20 mx-auto bg-[#422afb] rounded-full flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-[#1b254b] mb-3">I'm a Citizen</h2>
              <p className="text-[#a3aed0] mb-6 leading-relaxed text-sm">
                Access city services, pay bills, submit requests, track applications, and stay connected with your local government.
              </p>
              
              {/* Features */}
              <div className="mb-6 space-y-2">
                <div className="flex items-center justify-center text-[#1b254b] text-sm">
                  <svg className="w-4 h-4 mr-2 text-[#422afb]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Pay utilities & taxes
                </div>
                <div className="flex items-center justify-center text-[#1b254b] text-sm">
                  <svg className="w-4 h-4 mr-2 text-[#422afb]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Submit service requests
                </div>
                <div className="flex items-center justify-center text-[#1b254b] text-sm">
                  <svg className="w-4 h-4 mr-2 text-[#422afb]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Track applications
                </div>
              </div>
              
              {/* CTA Button */}
              <button 
                onClick={handleCitizenSignup}
                className="w-full bg-[#422afb] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#1b254b] transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg text-sm"
              >
                Get Started as Citizen
                <svg className="w-4 h-4 inline ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Employee Section */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-[#a3aed0] hover:shadow-xl transition-all duration-300 group">
            <div className="text-center">
              {/* Employee Illustration */}
              <div className="mb-6">
                <div className="w-20 h-20 mx-auto bg-[#1b254b] rounded-full flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                    <path d="M6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-[#1b254b] mb-3">I'm an Employee</h2>
              <p className="text-[#a3aed0] mb-6 leading-relaxed text-sm">
                Manage city operations, process citizen requests, update service statuses, and collaborate with your team effectively.
              </p>
              
              {/* Features */}
              <div className="mb-6 space-y-2">
                <div className="flex items-center justify-center text-[#1b254b] text-sm">
                  <svg className="w-4 h-4 mr-2 text-[#422afb]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Manage service requests
                </div>
                <div className="flex items-center justify-center text-[#1b254b] text-sm">
                  <svg className="w-4 h-4 mr-2 text-[#422afb]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Update case statuses
                </div>
                <div className="flex items-center justify-center text-[#1b254b] text-sm">
                  <svg className="w-4 h-4 mr-2 text-[#422afb]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Access admin tools
                </div>
              </div>
              
              {/* CTA Button */}
              <button 
                onClick={handleStaffSignup}
                className="w-full bg-[#1b254b] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#422afb] transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg text-sm"
              >
                Get Started as Employee
                <svg className="w-4 h-4 inline ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-[#a3aed0] text-sm">
            Already have an account? 
            <a href="#" className="text-[#422afb] font-semibold hover:text-[#1b254b] ml-1">Sign In</a>
          </p>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-12 h-12 bg-[#422afb] rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-10 h-10 bg-[#422afb] rounded-full opacity-30 animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-14 h-14 bg-[#422afb] rounded-full opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-40 right-10 w-8 h-8 bg-[#422afb] rounded-full opacity-30 animate-pulse animation-delay-3000"></div>
      </div>
    </div>
  );
};

export default GetStarted;