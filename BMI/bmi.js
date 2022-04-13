const express = require("express");
const bodyParser = require("body-parser")
const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/" ,function(req,res){
    res.sendFile(__dirname+"/index.html")
});

app.post("/",function(req,res){
    console.log(req.body.height);
    console.log(req.body.weight);

    var bmi = Number(req.body.weight)/(Number(req.body.height)*Number(req.body.height));
    res.send("Your BMI is "+bmi+"!!");
})

app.listen(3000,function(){
    console.log("aa gaye aap")
});