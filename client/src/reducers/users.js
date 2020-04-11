const users = (state = [], action) => {
  switch (action.type) {
    case "LOAD_USER_SUCCESS":
      return action.users;

    case "POST_USER":
      return [
        ...state,
        {
          userName: action.userName,
          Name: action.Name,
          Number: action.Number
        },
      ];

    case "POST_USER_SUCCESS":
    case "POST_USER_FAILURE":
    case "DELETE_USER":
      return state.filter((item) => item.userName !== action.userName);

    case "DELETE_USER_SUCCESS":
    case "LOAD_USER_FAILURE":
    case "DELETE_USER_FAILURE":
    default:
      return state;
  }
};

export default users;
