import React from 'react';
import UserItem from './UserItem';

//this component displays all the users we have in our users state from App.js
function UserList(props) {
  return (
    <div>
      {/* we loop through all the users and for every user,
         we display a UserItem component. We also pass the user as a prop
         to UserItem so that we can display it */}
      {props.allUsers.map((user) => (
        <UserItem
          user={user}
          delete={props.delete}
          updateUser={props.updateUser}
        />
      ))}
    </div>
  );
}

export default UserList;
