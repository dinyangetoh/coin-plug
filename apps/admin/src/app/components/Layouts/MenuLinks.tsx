import React, {FC} from 'react';
import {Link} from "react-router-dom";
import {routeLinks} from "../../routes/routeLinks";

interface MenuLinksProps {
  listStyle?: string
}

const MenuLinks: FC<MenuLinksProps> = ({listStyle}) => {
  return (
    <div className="w-full mx-4">
      {routeLinks.map(({path, label}) => (
        <Link to={path}
              className={`block text-xl bg-blue-600 rounded p-2 w-full m-2 pl-6 text-blue-200 hover:text-white mr-4`}>
          {label}
        </Link>
      ))}

    </div>
  );
};

export default MenuLinks;
