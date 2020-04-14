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
    case "UPDATE_USER":
      return state.map(item => ({
        ...item,
        ...(item.userName === action.userName && {
          edit: false,
          Name: action.Name,
          Number: action.Number
        })
      }))

    case "UPDATE_USER_SUCCESS":
      return state.map(item => ({
        ...item,
        ...(item.userName === action.userName && {
          edit: false,
          Name: action.Name,
          Number: action.Number
        })
      }))

    case "UPDATE_USER_FAILURE":
      return state.map(item => ({
        ...item,
        ...(item.userName === action.userName && {
          edit: false
        })
      }))

    case "SEARCH_USER":
      return state.map((item) => ({
        ...item,
        ...(item.Name.toLowerCase().includes(action.value) || item.Number.includes(action.value))
      }))

    case "SEARCH_USER_RESET":
      return state.map((item) => ({
        ...item
      }))

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
