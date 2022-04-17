import React from 'react';
// import
import NavBar from "./components/Layouts/NavBar";
import SideBar from "./components/Layouts/SideBar";

const AppLayout: React.FC = ({children}) => {
  const isMobile = window.screen.width < 640;
  return (
    <>
      {isMobile && (
        <div className="visible">
          <NavBar/>
          <div className="container p-4">
            {children}
          </div>
        </div>
      )}
      {!isMobile && (
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-1">
            <SideBar/>
          </div>
          <div className="col-span-3 my-6 mx-2 mr-6">
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default AppLayout;
