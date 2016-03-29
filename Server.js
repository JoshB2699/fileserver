var express = require('express')
var port = 8080

    app = express();
    
app.use(express.static(__dirname+'/public'));

app.listen(port);

console.log('Server running on port ' + port)