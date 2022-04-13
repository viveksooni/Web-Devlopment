const express = require("express");

const app = express();

app.get("/",function(req,res){
    res.send("<h1>hello<h2>")});

app.get("/about",function(req,res){
    res.send("<h1>vivek Soni<h1> <br> <h2>naam to suna hi hoga<h2>");
})

app.get("/contact",function(req,res){res.send("contact vivek at: sonivivek346@gmail.com")})


app.listen(10000,function(){console.log("server at  10000")});
