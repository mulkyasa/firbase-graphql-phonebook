const firebase = require("firebase");

const getUsers = () => {
  const phonebookReference = firebase.database().ref("/Phonebook/");
  return new Promise((resolve, reject) => {
    //Attach an asynchronous callback to read the data
    phonebookReference.on(
      "value",
      function (snapshot) {
        const folders = snapshot.val();
        if (folders === null) {
          resolve([]);
        } else {
          const data = Object.keys(folders).map((o) =>
            Object.assign({ userName: o }, folders[o])
          );
          resolve(data);
        }
        phonebookReference.off("value");
      },
      function (errorObject) {
        console.log("The read failed: " + errorObject.code);
        reject("The read failed: " + errorObject.code);
      }
    );
  });
};

const createUser = (user) => {
  const referencePath = "/Phonebook/" + user.userName + "/";
  const phonebookReference = firebase.database().ref(referencePath);
  return new Promise((resolve, reject) => {
    phonebookReference.set(
      { Name: user.Name, Number: user.Number },
      (error) => {
        if (error) {
          reject("Data could not be saved." + error);
        } else {
          resolve(user);
        }
      }
    );
  });
};

const updateUser = (user) => {
  const referencePath = "/Phonebook/" + user.userName + "/";
  const phonebookReference = firebase.database().ref(referencePath);
  return new Promise((resolve, reject) => {
    phonebookReference.update(
      { Name: user.Name, Number: user.Number },
      (error) => {
        if (error) {
          reject("Data could not be saved." + error);
        } else {
          resolve(user);
        }
      }
    );
  });
};

const deleteUser = (user) => {
  const referencePath = "/Phonebook/" + user.userName + "/";
  const phonebookReference = firebase.database().ref(referencePath);
  return new Promise((resolve, reject) => {
    phonebookReference.remove((error) => {
      if (error) {
        reject("Data could not be saved." + error);
      } else {
        resolve(user);
      }
    });
  });
};

module.exports = { getUsers, createUser, updateUser, deleteUser };
