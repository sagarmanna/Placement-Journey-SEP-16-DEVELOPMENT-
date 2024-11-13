// const fs = require("fs")
// fs.readFile()


// create HTTP Server
const express = require('express');
const port=3000;
const app=express();
//this is to similer fs.readfile("poath","utf-7",())
app.get('/', function  (req, res){
  res.send('Hello World!');
})


app.listen(port);