import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';

const API_URL = 'http://localhost:3000/graphql';

const client = new ApolloClient({
  uri: API_URL
})

// start load chat data
const loadUserSuccess = (users) => ({
  type: 'LOAD_USER_SUCCESS',
  users
})

const loadUserFailure = () => ({
  type: 'LOAD_USER_FAILURE'
})

export const loadUser = () => {
  const userQuery = gql`
  query {
    users {
      userName
      Name
      Number
    }
  }`;
  return dispatch => {
    return client.query({query: userQuery})
    .then(function (response) {
      dispatch(loadUserSuccess(response.data.users))
    })
    .catch(function (error) {
      console.error(error);
      dispatch(loadUserFailure())
    });
  }
}

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
  const addQuery = gql`
  mutation addUser($userName: String!, $Name: String!, $Number: String!) {
    addUser(userName: $userName, Name: $Name, Number: $Number) {
      userName
      Name
      Number
    }
  }
  `;
  return dispatch => {
    dispatch(postUserRedux(userName, Name, Number))
    return client.mutate({
      mutation: addQuery,
      variables: {
        userName,
        Name,
        Number
      }
    })
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
  const deleteQuery = gql`
  mutation removeUser($userName: $String!) {
    removeUser(userName: $userName) {
      userName
    }
  }
  `;
  return dispatch => {
    dispatch(deleteUserRedux(userName))
    return client.mutate({
      mutation: deleteQuery,
      variables: {
        userName
      }
    })
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