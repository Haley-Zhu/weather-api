const express = require("express");
const weather = require("../models/Weather");

const router = express.Router();

router.get("/:cc/:city", (req, res) => {
  const { cc, city } = req.params;
  const weatherType = req.query.weatherType;
  weather
    .getData(city, cc, weatherType)
    .then(response => {
      res.json(response);
    })
    .catch(err => console.log(err));
});

module.exports = router;
