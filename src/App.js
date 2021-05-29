import logo from './logo.svg';
import './App.css';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import { useState } from 'react';
import EditUserForm from './components/EditUserForm';

function App() {
  //we have a main state that holds all our users
  //this state will be modified by our userform component anytime
  //we want to add a new user

  //This state will also be used by our userlist component to display
  //all the users we have in our application
  const [users, setUsers] = useState([]);
  const [userToUpdate, setUserToUpdate] = useState({
    username: '',
    email: '',
    password: '',
    country: '',
  });

  //a function to update the users state given a user id and
  // an updated user information
  function updateUser(id, updatedUserInfo) {
    let newUsers = users.map((user) => {
      if (user.id === id) {
        return updatedUserInfo;
      }
      return user;
    });
    setUsers(newUsers);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          {/* we pass the addUser function to userform as a props to be called whenever
          we want to create a new user */}
          <UserForm />
        </div>
        <div className="col-md-6">
          {/* we pass the users down to userlist component to be displayed */}
          <UserList
            updateUser={updateUser} //we pass down the update function to userlist component.
            //The goal is to get it in the edit user form
          />
        </div>
      </div>
    </div>
  );
}

export default App;
