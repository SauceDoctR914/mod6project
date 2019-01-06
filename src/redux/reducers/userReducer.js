const initialState = {
  currentUser: {
    user: {},
    jwt: ""
  },
  users: [],
  notebooks: [],
  newNotebook: {},
  notes: []
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER": {
      return { ...state, currentUser: action.getUser };
    }
    case "GET_USERS": {
      return { ...state, users: action.payload };
    }
    case "GET_NOTEBOOKS": {
      return { ...state, notebooks: action.notebooks.data };
    }
    case "GET_NOTES": {
      return { ...state, notes: action.notes.data };
    }
    default:
      return state;
  }
};
export default userReducer;
