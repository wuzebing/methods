var express = require('express');
var app = express();	

app.use(express.static(__dirname));

app.get("/jsonp/test", function(req, res) {
  res.send('callback(1111)');
})

app.listen(8188, function(){
  console.log("Server running at %s", 8189)
});
