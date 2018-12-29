export const getUser = currentUser => ({
  type: "GET_USER",
  payload: currentUser
});

export const getUsers = users => ({ type: "GET_USERS", payload: users.data });
export const getNoteBooks = notebooks => ({
  type: "GET_NOTEBOOKS",
  payload: notebooks
});

export const fetchNoteBooks = () => {
  return dispatch => {
    return fetch("http://localhost:3002/api/v1/notebooks")
      .then(res => res.json())
      .then(responseObj => Object.values(responseObj))
      .then(notebooks => dispatch({ type: "GET_NOTEBOOKS", notebooks }))
      .catch(console.error);
  };
};

export const fetchNotes = () => {
  return dispatch => {
    return fetch("http://localhost:3002/api/v1/notes")
      .then(res => res.json())
      .then(responseObj => Object.values(responseObj))
      .then(notes => dispatch({ type: "GET_NOTES", notes }))
      .catch(console.error);
  };
};
