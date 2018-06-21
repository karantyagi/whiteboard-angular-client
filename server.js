//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/hello-world-app'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin",
    // "http://localhost:4200");
    "https://kt-course-manager-server.herokuapp.com");
  res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

app.get('/*', function(req,res) {

  res.sendFile(path.join(__dirname,'/dist/hello-world-app/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT);
