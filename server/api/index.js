const express = require("express");
const router = express.Router();
const db = require("../mysql/db");

router.get("/marriageform", (req, res) => {
  res.send({ test: "this is test" });
});

router.post("/marriageform", (req, res) => {
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
    marriage_woman: req.body.marirage_woman,
    marriage_date: req.body.marriage_date,
    description_location: req.body.description_location,
    phone_man: req.body.phone_man,
    phone_woman: req.body.phone_woman,
    message_invite: req.body.message_invite,
    visitok: req.body.visitok,
  };
  db.connect();
  db.query(
    `INSERT INTO marriageform (marriage_man, marriage_woman,marriage_date,description_location, phone_man, phone_woman, message_invite, visitok) VALUES ('${formData.marriage_man}', '${formData.marriage_woman}','${formData.marriage_date}','${formData.description_location}', '${formData.phone_man}', '${formData.phone_woman}', '${formData.message_invite}', '${formData.visitok}');`,
    (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log("insert 성공");
        res.send({ data: data });
        db.end();
      }
    }
  );
});
module.exports = router;
