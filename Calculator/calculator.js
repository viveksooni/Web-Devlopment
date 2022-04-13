const express = require("express");

const bodyParser = require("body-parser");
const req = require("express/lib/request");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){res.sendFile(__dirname+ "/index.html")});


app.post("/", function(req,res){
    var n1 =Number(req.body.n1);
    var n2 =Number(req.body.n2);


    var ans = n1+n2;

    res.send("Answer is ="+ans);
})
app.listen(3000, function(){console.log("aa gaye 3000 pe")});
