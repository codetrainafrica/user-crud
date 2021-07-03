import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signup } from '../actions/authActions';

function Signup(props) {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  function handleOnChange(event) {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  }
  function handleOnSubmit() {
    props.signup(credentials.email, credentials.password);
  }
  return (
    <div style={{ fontSize: 50 }}>
      <form>
        <h1>Sign up</h1>
        <div>
          <label>Email</label>
          <input type="email" name="email" onChange={handleOnChange} />
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" onChange={handleOnChange} />
        </div>

        <div>
          <button type="button" onClick={handleOnSubmit}>
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}

const mapDispatchToProps = { signup };
export default connect(null, mapDispatchToProps)(Signup);
