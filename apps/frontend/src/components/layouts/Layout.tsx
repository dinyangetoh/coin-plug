import React from 'react';
import SideBar from "./SideBar";
import NotificationBar from "./NotificationBar";

const Layout = ({children}) => {
  return (
    <div className="grid grid-cols-5">

      <div className="col-span-1">
        <SideBar/>
      </div>
      <div className="col-span-4 bg-gray-200">
        <NotificationBar/>
        <main className="container h-screen">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
