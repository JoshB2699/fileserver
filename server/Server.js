var express = require('express')
var path = require('path');
var port = 8080

    app = express();
    
app.use(express.static(__dirname+'/public'));
app.set('view engine', 'ejs')
app.set('views', './server/views')

var indexView = function(req,res) {
    res.render('index.ejs');
    }

var selectorView = function(req,res) {
    res.render('image_selector.ejs')
}        

app.get('/image_selector', selectorView);
        
app.get('/image', function(req, res) {
     res.render('image', {image_url: req.query.image});
});

app.use('/public', 
    express.static(path.join(__dirname, '../public'))
);

app.get('*', indexView);

app.listen(port);

console.log('Server running on port ' + port)