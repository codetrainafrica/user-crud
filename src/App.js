import logo from './logo.svg';
import './App.css';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import { useState } from 'react';

function App() {
  //we have a main state that holds all our users
  //this state will be modified by our userform component anytime
  //we want to add a new user

  //This state will also be used by our userlist component to display
  //all the users we have in our application
  const [users, setUsers] = useState([]);

  //this is a helper function that adds a new user to our users state
  //we later pass this function to userform component to be called anytime
  //we want to create a new user
  function addUser(user) {
    setUsers([...users, user]);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          {/* we pass the addUser function to userform as a props to be called whenever
          we want to create a new user */}
          <UserForm addUser={addUser} />
        </div>
        <div className="col-md-6">
          {/* we pass the users down to userlist component to be displayed */}
          <UserList allUsers={users} />
        </div>
      </div>
    </div>
  );
}

export default App;
