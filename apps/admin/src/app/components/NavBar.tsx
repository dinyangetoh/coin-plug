import React from 'react';

const NavBar = () => {
  return (
    <nav className="bg-indigo-800 p-6">
      <div className="container flex items-center justify-between flex-wrap ">
        <div className="flex items-center text-white mr-0">
          <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54"
               xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/>
          </svg>
          <span className="font-semibold text-xl tracking-tight">Coin Plug</span>
        </div>

        <div className="w-full block flex lg:flex lg:items-end lg:w-auto">
          <div className="text-sm lg:flex-end">
            <a href="#responsive-header"
               className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Docs
            </a>
            <a href="#responsive-header"
               className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Examples
            </a>
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
              Blog
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;