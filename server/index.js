const express = require('express');
const vhost = require('vhost');


var app = express();

app.use(vhost('localhost',express.static('client/localhost')))


app.get('/test',function(req,res){
    console.log('enrtry');
    res.send('test')
})

app.listen( 80, function() {
    console.log( 'Express server listening on port %d in %s mode', 80, app.settings.env );
});
