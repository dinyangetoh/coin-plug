import React from 'react';
import {useApi} from "../../hooks/useApi";

interface User {
  _id: string;
  name: string,
  email: string,
  username: string
}

const UsersHome = () => {

  const {data: users} = useApi<User[]>('/users')

  return (
    <div>
      <h1 className="title text-4xl">Users</h1>
      {users && (
        <>
          <table className="table w-full">
            <thead className="bg-gray-50 text-blue-900">
            <tr>
              <th>Username</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
            </thead>
            <tbody>
            {users.map(user => {
              return (
                <tr key={user._id}>
                  <td className="px-2 py-1 border-b-2 border-b-gray-100">  {user.username}</td>
                  <td className="px-2 py-1 border-b-2 border-b-gray-100"> {user.name}</td>
                  <td className="px-2 py-1 border-b-2 border-b-gray-100"> {user.email}</td>
                </tr>
              )
            })}
            </tbody>
          </table>

        </>
      )

      }
    </div>
  );
};

export default UsersHome;
