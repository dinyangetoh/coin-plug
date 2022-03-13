import React from 'react';
import {useApi} from "../../hooks/useApi";

interface User {
  name: string,
  email: string,
  username: string
}

const UsersHome = () => {

  const {data} = useApi<User>('http://localhost:3000/api/users')
  console.log("Displaying user data", data)

  return (
    <div>
      <h1>Users Home Page</h1>
      <p>"Working with pages</p>
    </div>
  );
};

export default UsersHome;
