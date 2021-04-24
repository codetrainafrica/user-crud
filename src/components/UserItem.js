import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import EditUserForm from './EditUserForm';

//this component represents a single user that's displayed in the
//userlist component
function UserItem(props) {
  const [isModalVisible, setShowModal] = useState(false);

  function showModal() {
    setShowModal(true);
  }

  function hideModal() {
    setShowModal(false);
  }
  //we accept the user a prop and display the user's information
  return (
    <div className="row">
      <div className="col-md-3">{props.user.username}</div>
      <div className="col-md-3">{props.user.email}</div>
      <div className="col-md-2">{props.user.country}</div>
      <div className="col-md-4">
        <button onClick={showModal}>Edit</button>

        {/* We setup edit user modal */}
        <Modal show={isModalVisible} onHide={hideModal}>
          <Modal.Header closeButton>
            <Modal.Title>Edit User</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <EditUserForm
              user={props.user}
              updateUser={props.updateUser} //we pas down update user function to eidt user form
              hideModal={hideModal}
            />
          </Modal.Body>
        </Modal>

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
