var express = require('express');
var router = express.Router();
const firebase = require("firebase");

/* GET home page. */
router.get('/', function(req, res) {
  const phonebookReference = firebase.database().ref("/Phonebook/");
  //Attach an asynchronous callback to read the data
  phonebookReference.on("value", function(snapshot) {
    console.log(snapshot.val());
    res.json(snapshot.val());
    phonebookReference.off("value");
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
    res.send("The read failed: " + errorObject.code);
  });
});

module.exports = router;
