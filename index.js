var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")


const app = express()

app.get("/",(req,res)=>{
    res.send("Hello From Server")
}).listen(3000);

console.log("Listening on PORT 3000");