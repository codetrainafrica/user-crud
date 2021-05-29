export function addUserAction(user) {
  return {
    type: 'ADD_USER',
    payload: user,
  };
}

export function deleteUserAction(id) {
  return {
    type: 'DELETE_USER',
    payload: id,
  };
}
