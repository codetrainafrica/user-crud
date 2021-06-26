export function getAllUsers() {
  return (dispatch, state, { getFirestore }) => {
    const db = getFirestore();
    db.collection('users').onSnapshot(
      (results) => {
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
      },
      (err) => {
        console.log(err);
      }
    );
  };
}

export function addUserAction(user) {
  return async (dispatch, state, { getFirestore }) => {
    const db = getFirestore();
    try {
      await db.collection('users').add(user);
    } catch (error) {
      console.log(error);
    }
  };
}

export function deleteUserAction(id) {
  return async (dispatch, state, { getFirestore }) => {
    let db = getFirestore();
    try {
      await db.collection('users').doc(id).delete();
    } catch (err) {
      console.log(err);
    }
  };
}

export function updateUserAction(id, updatedUser) {
  return async (dispatch, state, { getFirestore }) => {
    let db = getFirestore();
    try {
      await db.collection('users').doc(id).update(updatedUser);
    } catch (err) {
      console.log(err);
    }
  };
}
