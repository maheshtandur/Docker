const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Well Come Mahesh Tandur ');
});

app.listen(8080, () => {
  console.log('Listening on port 8080');
});
