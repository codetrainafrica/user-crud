import logo from './logo.svg';
import './App.css';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import { useState } from 'react';
import EditForm from './components/EditForm';

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
  //this is a helper function that adds a new user to our users state
  //we later pass this function to userform component to be called anytime
  //we want to create a new user
  function addUser(user) {
    setUsers([...users, user]);
  }

  function deleteUser(id) {
    let newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  }

  function update(id) {
    let user = users.find((user) => user.id === id);
    setUserToUpdate(user);
  }

  function updateUser(id, newInfo) {
    let newUsers = users.map((user) => {
      if (user.id === id) {
        return newInfo;
      } else {
        return user;
      }
    });
    setUsers(newUsers);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          {/* we pass the addUser function to userform as a props to be called whenever
          we want to create a new user */}
          <UserForm addUser={addUser} />
          <EditForm
            username={userToUpdate.username}
            email={userToUpdate.email}
            password={userToUpdate.password}
            country={userToUpdate.country}
            updateUser={updateUser}
          />
        </div>
        <div className="col-md-6">
          {/* we pass the users down to userlist component to be displayed */}
          <UserList allUsers={users} delete={deleteUser} update={update} />
        </div>
      </div>
    </div>
  );
}

export default App;
