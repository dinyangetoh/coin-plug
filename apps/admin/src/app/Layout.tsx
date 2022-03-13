import React from 'react';
// import
import NavBar from "./components/NavBar";

const Layout: React.FC = ({children}) => {
  return (
    <>
      <NavBar/>
      <div className="container mx-auto py-3">
        {children}
      </div>
    </>
  );
};

export default Layout;
