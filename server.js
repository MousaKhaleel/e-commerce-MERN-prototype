console.log('test')

var data={
    "name": "Mousa Khaleel",
    "age": "21",
    "feild": "Software Engineering"
}
var products={
    p1:{
    "price": "10"
    },
    p2:{
    "price": "20"
    },
    p3:{
    "price": "30"
    },
    p4:{
    "price": "40"
    }
}
// ///////////////////////////////////////////////

const express= require('express');
var app=express();
const cors = require("cors");
app.use(cors());

app.get('/',function(req,res)
{
    res.send('server started');
});
// //////////////

app.get('/getData',function(req,res)
{
    res.json(data)
    // res.send('server started'); return json name age swe
});

app.get('/getPrice',function(req,res)
{
    res.json(products)
    // res.send('server started'); json 4 typs of product price on screen
});



var server=app.listen(8000,function(){
    var host=server.address().address;
    var port=server.address().port;
});
