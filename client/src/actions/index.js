import ApolloClient from "apollo-boost";
import gql from "graphql-tag";

const API_URL = "http://localhost:3000/graphql";

const client = new ApolloClient({
  uri: API_URL,
});

// start load chat data
export const loadUserSuccess = (users) => ({
  type: "LOAD_USER_SUCCESS",
  users,
});

export const loadUserFailure = () => ({
  type: "LOAD_USER_FAILURE",
});

export const loadUser = () => {
  const usersQuery = gql`
    query {
      users {
        userName
        Name
        Number
      }
    }
  `;
  return (dispatch) => {
    return client
      .query({ query: usersQuery })
      .then(function (response) {
        dispatch(loadUserSuccess(response.data.users));
      })
      .catch(function (error) {
        console.error(error);
        dispatch(loadUserFailure());
      });
  };
};

// start post user data
export const postUserSuccess = (user) => ({
  type: "POST_USER_SUCCESS",
  user,
});

export const postUserFailure = (userName) => ({
  type: "POST_USER_FAILURE",
  userName,
});

const postUserRedux = (userName, Name, Number) => ({
  type: "POST_USER",
  userName,
  Name,
  Number,
});

export const postUser = (Name, Number) => {
  let id = Date.now();
  let userName = id.toString();
  const addQuery = gql`
    mutation addUser($userName: String!, $Name: String!, $Number: String!) {
      addUser(userName: $userName, Name: $Name, Number: $Number) {
        userName
        Name
        Number
      }
    }
  `;
  return (dispatch) => {
    dispatch(postUserRedux(userName, Name, Number));
    return client
      .mutate({
        mutation: addQuery,
        variables: {
          userName,
          Name,
          Number,
        },
      })
      .then((response) => {
        console.log(response.data);
        dispatch(postUserSuccess(response.data));
      })
      .catch((error) => {
        console.error(error);
        dispatch(postUserFailure(userName));
      });
  };
};

// start update user data
export const updateUserSuccess = (user) => ({
  type: "UPDATE_USER_SUCCESS",
  user
});

export const updateUserFailure = (userName) => ({
  type: "UPDATE_USER_FAILURE",
  userName
});

const updateUserRedux = (userName, Name, Number) => ({
  type: "UPDATE_USER",
  userName,
  Name,
  Number,
});

export const updateUser = (userName, Name, Number) => {
  const updateQuery = gql`
    mutation updateUser($userName: String!, $Name: String!, $Number: String!) {
      updateUser(userName: $userName, Name: $Name, Number: $Number) {
        userName
        Name
        Number
      }
    }
  `;
  return (dispatch) => {
    dispatch(updateUserRedux(userName, Name, Number));
    return client.mutate({
      mutation: updateQuery,
      variables: {
        userName,
        Name,
        Number,
      },
    })
    .then((response) => {
      console.log(response.data);
      dispatch(updateUserSuccess(response.data));
    })
    .catch((error) => {
      console.error(error);
      dispatch(updateUserFailure(userName));
    });
  };
};

// start delete user data
const deleteUserRedux = (userName) => ({
  type: "DELETE_USER",
  userName,
});

export const deleteUserSuccess = (users) => ({
  type: "DELETE_USER_SUCCESS",
  users,
});

export const deleteUserFailure = () => ({
  type: "DELETE_USER_FAILURE",
});

export const deleteUser = (userName) => {
  const deleteQuery = gql`
    mutation removeUser($userName: String!) {
      removeUser(userName: $userName) {
        userName
      }
    }
  `;
  return (dispatch) => {
    dispatch(deleteUserRedux(userName));
    return client
      .mutate({
        mutation: deleteQuery,
        variables: {
          userName,
        },
      })
      .then((response) => {
        dispatch(deleteUserSuccess(response.data));
      })
      .catch((error) => {
        console.error(error);
        dispatch(deleteUserFailure());
      });
  };
};
// end delete comment data

// start search data

export const searchUser = (value) => ({
  type: "SEARCH_USER",
  value: value.trim()
})

export const searchUserReset = () => ({
  type: "SEARCH_USER_RESET"
})

// end search data