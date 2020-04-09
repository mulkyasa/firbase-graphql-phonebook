// start post user data
const postUserSuccess = (user) => ({
  type: 'POST_USER_SUCCESS',
  user
})

const postUserFailure = (userName) => ({
  type: 'POST_USER_FAILURE', userName
})

const postUserRedux = (userName, Name, Number) => ({
  type: 'POST_USER', userName, Name, Number
})


export const postUser = (Name, Number) => {
  let userName = Date.now();
  return dispatch => {
    dispatch(postUserRedux(userName, Name, Number))
    .then((response) => {
      dispatch(postUserSuccess(response.data))
    })
    .catch((error) => {
      console.error(error);
      dispatch(postUserFailure(userName))
    });
  }
}

// start delete user data
const deleteUserRedux = (userName) => ({
  type: 'DELETE_USER', userName
})

const deleteUserSuccess = (users) => ({
  type: 'DELETE_USER_SUCCESS',
  users
})

const deleteUserFailure = () => ({
  type: 'DELETE_USER_FAILURE'
})

export const deleteUser = (userName) => {
  return dispatch => {
    dispatch(deleteUserRedux(userName))
    .then((response) => {
      dispatch(deleteUserSuccess(response.data))
    })
    .catch((error) => {
      console.error(error);
      dispatch(deleteUserFailure())
    });
  }
}
// end delete comment data