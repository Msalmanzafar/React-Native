
const app = require('./app')


var port = process.env.PORT || 3080;


app.listen(port, function(){
    console.log("Express server listening on port", port);
  });