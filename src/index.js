const express = require('express');
const axios = require('axios');

const app = express();

app.get('/', (req, res) => {
  res.send("hhhhhhh");
})

app.listen(3000, () => console.log(`app listen on port 3000`));