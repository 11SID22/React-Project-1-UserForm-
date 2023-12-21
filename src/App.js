import React, { useState, Fragment } from 'react';

import AddUser from './Components/Users/AddUser';
import UsersList from "./Components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const onAddUserHandler = (uName, uAge, uCollege) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList,
      {
        name: uName,
        age: uAge,
        collegename: uCollege,
        id: Math.random().toString()
      },
      ];
    })
  }
  return (
    <Fragment>
      <AddUser onAddUser={onAddUserHandler} />
      <UsersList users={usersList} />
    </Fragment>
  );
}

export default App;
