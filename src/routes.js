const express = require('express');
const weatherRoutes = require('./routes/weather');

const router = express.Router();
router.get('/', (req, res) => {
  res.send("hhhhhhh");
})

router.use('/api/weather', weatherRoutes);

module.exports = router;