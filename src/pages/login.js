import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/authActions';

function Login(props) {
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  function handleOnChange(event) {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  }
  function handleOnSubmit() {
    props.login(credentials.email, credentials.password);
  }
  return (
    <div style={{ fontSize: 50 }}>
      <h1>Log in</h1>
      <form>
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
            Log in
          </button>
        </div>
      </form>
    </div>
  );
}
const mapDispatchToProps = { login };
export default connect(null, mapDispatchToProps)(Login);
