export const getUser = currentUser => ({
  type: "GET_USER",
  payload: currentUser
});

export const getUsers = users => ({ type: "GET_USERS", payload: users.data });
