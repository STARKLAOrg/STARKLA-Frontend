import React, { useState } from "react";
import Sidebar from "./sidebar";
import Header from "./header";
import Footer from "./footer";

const MainLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen w-screen">
      {/* Sidebar */}
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={toggleSidebar}
        headerHeight="64px"
      />

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        <Header onMenuClick={toggleSidebar} />
        <main
          className={`flex-1 p-6 bg-gray-50 overflow-auto transition-all duration-1 ${
            isSidebarOpen ? "lg:ml-64" : ""
          }`}
        >
          {children}
        </main>
        <Footer
         customClass={`p-4 bg-gray-100 transition-all duration-100 ${
          isSidebarOpen ? "lg:ml-64" : ""
        }`}
      />
      </div>
    </div>
  );
};

export default MainLayout;
