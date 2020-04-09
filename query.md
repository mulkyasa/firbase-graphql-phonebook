{
  users {
    userName
    Name
    Number
  }
}


mutation {
  addUser(userName: "green", Name: "barry allan", Number: "082901840295") {
    userName
    Name
    Number
  }
}


mutation {
  updateUser(userName: "green", Name: "peter", Number: "082901840295") {
    userName
    Name
    Number
  }
}


mutation {
  removeUser(userName: "green") {
    userName
  }
}