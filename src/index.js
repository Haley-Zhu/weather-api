const express = require('express');
const axios = require('axios');

const app = express();

app.get('/', (req, res) => {
  res.send("hhhhhhh");
})

app.get('/api/weather/:cc/:city', (req, res) => {
  const { cc, city } = req.params;
  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${cc}&APPID=e3ecd9546eaf7b421f60e9c4a1b22be1`)
  .then(response => {res.send(response.data)})
  .catch(err => console.log(err));
})

app.listen(3000, () => console.log(`app listen on port 3000`));