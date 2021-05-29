const initalState = { users: [] };

export default function (state = initalState, action) {
  switch (action.type) {
    case 'ADD_USER':
      let newUsers = [...state.users, action.payload];
      return { users: newUsers };

    case 'DELETE_USER':
      let id = action.payload;
      let usersAfterDelete = state.users.filter((user) => user.id !== id);
      return { users: usersAfterDelete };

    default:
      return state;
  }
}
