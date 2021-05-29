const initalState = { users: [] };

export default function (state = initalState, action) {
  switch (action.type) {
    case 'ADD_USER':
      let newUsers = [...state.users, action.payload];
      return { users: newUsers };
    default:
      return state;
  }
}
