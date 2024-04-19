console.log('test')

var data={
    "name": "Mousa Khaleel",
    "age": "21",
    "feild": "Software Engineering"
}
var products=[
    {
    "price": "10",
    "color": "blue",
    "pic": "earbuds"
    },
    {
    "price": "20",
    "color": "yellow",
    "pic": "usb"
    },
    {
    "price": "30",
    "color": "grey",
    "pic": "charger"
    },
    {
    "price": "40",
    "color": "red",
    "pic": "idk"
    }
]
// var products={
//     "product":[
//     {
//     "price": "10",
//     "color": "blue",
//     "pic": "earbuds"
//     },
//     {
//     "price": "20",
//     "color": "yellow",
//     "pic": "usb"
//     },
//     {
//     "price": "30",
//     "color": "grey",
//     "pic": "charger"
//     },
//     {
//     "price": "40",
//     "color": "red",
//     "pic": "idk"
//     }
// ]
// }
// ///////////////////////////////////////////////////////

const {MongoClient}=require('mongodb')
var connection="mongodb+srv://user1:qwe12345678@cluster0.1ogr7io.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const client= new MongoClient(connection)

const mydb= client.db('test')

const collection= mydb.collection('Users')

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
app.get('/users',async(req,res)=>
{
    const data= await collection.find({}).toArray()
    res.send(data)
});
app.get('/user/:name',async(req,res)=>
{
    const data= await collection.findOne({'username':req.params.name})
    res.send(data)
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
