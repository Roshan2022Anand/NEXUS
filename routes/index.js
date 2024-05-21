const express = require('express');
const router = express.Router();
const users = require("./users")
const cors = require("cors");
const mongoose = require("mongoose");


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});


//setup for fetching form data
router.use(cors());
router.use(express.json());
router.use(express.urlencoded({ extended: true })); // Handle form data encoding

router.post('/sendData', async (req, res) => {
  try {
    const dataInfo = await users.create({
      name: req.body['user-name'],
      email: req.body['user-email'],
      phoneNo: req.body['user-phone-no'],
      whatsApp: req.body['user-whatsapp'],
      qualification: req.body['qualification'],
      address: req.body['user-address']
    })
    setTimeout(() => {
      console.log("New user created:", dataInfo);
      res.render("thank");
    }, 3000)
  } catch (err) {
    console.error(err);
    res.status(500).send("Error saving data");
    res.render("error", { error: err })
  }
})

module.exports = router;
