export function getAllUsers() {
  return (dispatch, state, { getFirestore }) => {
    const db = getFirestore();
    db.collection('users')
      .get()
      .then((results) => {
        let users = [];
        results.forEach((doc) => {
          //approach 1
          let user = doc.data();
          user.id = doc.id;
          users.push(user);

          //approach 2
          //users.push({ ...doc.data(), id: doc.id });
        });

        dispatch({
          type: 'ADD_ALL_USERS',
          payload: users,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function addUserAction(user) {
  return (dispatch, state, { getFirestore }) => {
    const db = getFirestore();
    db.collection('users')
      .add(user)
      .then(() => {
        //send the data to the store
        dispatch({
          type: 'ADD_USER',
          payload: user,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function deleteUserAction(id) {
  return (dispatch, state, { getFirestore }) => {
    let db = getFirestore();
    db.collection('users')
      .doc(id)
      .delete()
      .then(() => {
        dispatch({
          type: 'DELETE_USER',
          payload: id,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function updateUserAction(id, updatedUser) {
  return (dispatch, state, { getFirestore }) => {
    let db = getFirestore();
    db.collection('users')
      .doc(id)
      .update(updatedUser)
      .then(() => {
        dispatch({
          type: 'UPDATE_USER',
          payload: { id: id, updatedUserInfo: updatedUser },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
