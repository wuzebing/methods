var express = require('express');
var app = express();	

app.use(express.static(__dirname));

app.get("/api/test", function(req, res) {
  res.send('success');
})

app.listen(8189, function(){
  console.log("Server running at %s", 8189)
});
