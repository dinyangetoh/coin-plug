import React, {FC} from 'react';

const AuthLayout: FC = ({children}) => {
  return (
    <div className="container">
      {children}
    </div>
  );
};

export default AuthLayout;
