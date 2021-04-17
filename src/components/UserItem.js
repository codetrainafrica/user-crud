import React from 'react';

//this component represents a single user that's displayed in the
//userlist component
function UserItem(props) {
  //we accept the user a prop and display the user's information
  return (
    <div className="row">
      <div className="col-md-3">{props.user.username}</div>
      <div className="col-md-3">{props.user.email}</div>
      <div className="col-md-2">{props.user.country}</div>
      <div className="col-md-4">
        <button
          onClick={() => {
            props.update(props.user.id);
          }}
        >
          Update
        </button>
        <button
          onClick={() => {
            props.delete(props.user.id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default UserItem;
