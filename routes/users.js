var express = require("express");
var router = express.Router();
const AudioShare = require("../audioShareUser");

router.put("/", function (req, res, next) {
  const { username, email, password } = req.body;
  const newUser = new AudioShare({
    username: username,
    password: password,
    email: email,
  });
  newUser.save(function (error, document) {
    if (error) console.error(error), res.send("something went wrong...");
    else console.log(document), res.send(document);
  });
});

module.exports = router;
