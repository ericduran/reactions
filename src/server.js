const express = require('express');
const api  = require('./lib/api');
const app = express();

// API Path. I subdomain api.{domain}.com so
// I don't like using api again in the uri.
app.use('/a', api);

const server = app.listen(process.env.PORT || 8080, () => {
  const port = server.address().port;
  console.log(`App listening on port ${port}`);
});
