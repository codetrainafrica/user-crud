const initialState = {
  users: [{ name: "Jacob", userId: "4238490fljlfksdj", gender: "male" }],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_USER":
            
            break;
    
        default:
            return state;
    }
};

export default usersReducer;
