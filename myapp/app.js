/**
 * Created by Janitha on 8/28/2015.
 */


var express = require('express');
var app = express();

app.post('/server', function (req, res) {
  res.send('Hello World!');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
