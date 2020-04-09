const users = (state = [], action) => {
  switch (action.type) {
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
    break;
    case "POST_USER_FAILURE":
    break;

    case "DELETE_USER":
      return state.filter((item) => item.userName !== action.userName);

    case "DELETE_USER_SUCCESS":
      return state;

    case "LOAD_USER_FAILURE":
    break;
    case "DELETE_USER_FAILURE":
    break;
    default:
      return state;
  }
};

export default users;
