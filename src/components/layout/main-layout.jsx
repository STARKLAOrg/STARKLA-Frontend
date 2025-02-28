import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

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
          customClass={`p-4 bg-blue-600 transition-all duration-100 ${
            isSidebarOpen ? "lg:ml-64" : ""
          }`}
        />
      </div>
    </div>
  );
};

export default MainLayout;
