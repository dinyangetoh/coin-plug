import React, {FC} from 'react';
import SearchBox from "../ui/atoms/SearchBox";

const NotificationBar: FC = () => {
  return (
    <div className="w-full bg-white h-20 p-4">
      <SearchBox/>
    </div>
  );
};

export default NotificationBar;
