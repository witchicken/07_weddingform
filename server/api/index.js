const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/marriageform", (req, res) => {
  res.send({ test: "this is test" });
});

router.post("/marriageform", (req, res) => {
  console.log(req.body.marriage_man);
  /*let marriage_man = req.body.marriage_man;
  let marirage_woman = req.body.marirage_woman;
  //이미지
  let marriage_date = req.body.marriage_date;
  let desciption_location = req.body.desciption_location;
  let phone_man = req.body.phone_man;
  let phone_woman = req.body.phone_woman;
  let message_invite = req.body.message_invite;
  let visitok = req.body.visitok;*/
  let formData = {
    marriage_man: req.body.marriage_man,
    marirage_woman: req.body.marirage_woman,
    marriage_date: req.body.marriage_date,
    desciption_location: req.body.desciption_location,
    phone_man: req.body.phone_man,
    phone_woman: req.body.phone_woman,
    message_invite: req.body.message_invite,
    visitok: req.body.visitok,
  };
  res.send(formData);
});
module.exports = router;
