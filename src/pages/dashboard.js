import { connect } from 'react-redux';
import { logout } from '../actions/authActions';
import '../App.css';
import UserForm from '../components/UserForm';
import UserList from '../components/UserList';

function Dashboard(props) {
  function handleLogout() {
    props.logout();
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <button
            type="button"
            style={{ backgroundColor: 'red', color: 'white' }}
            onClick={handleLogout}
          >
            Log out
          </button>
          <UserForm />
        </div>
        <div className="col-md-6">
          <UserList />
        </div>
      </div>
    </div>
  );
}
const mapDispatchToProps = { logout };
export default connect(null, mapDispatchToProps)(Dashboard);
