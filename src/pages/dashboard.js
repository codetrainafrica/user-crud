import '../App.css';
import UserForm from '../components/UserForm';
import UserList from '../components/UserList';

function Dashboard() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <UserForm />
        </div>
        <div className="col-md-6">
          <UserList />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
