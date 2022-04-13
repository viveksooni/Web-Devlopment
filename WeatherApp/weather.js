const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const { json } = require("express/lib/response");

const app = express();


app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req,res){

   res.sendFile( __dirname+"/index.html");

});

app.post("/",function(req,res){
    console.log("post recived");
    console.log(req.body.cityName);

    const cityName =req.body.cityName;
    const unit = "metric";
    const apiKey = "a6bc5bfb484426f73ac4f85f684dec35";

    const url = "https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid="+apiKey+"&units="+unit;

    https.get(url,function(respone){
        console.log(respone);
        console.log(respone.statusCode);

        respone.on("data",function(data){
            
            // console.log(data); data will be in hexa decimal

            const weatherData=JSON.parse(data);
            console.log(weatherData);

            const temp = weatherData.main.temp;
            console.log(temp);

            const desc = weatherData.weather[0].description;
            console.log(desc);

            res.write("<h1> temp in "+cityName+" is "+temp+" degree celsius<h1>");
            res.write("<h4> weather is "+desc+"<h4>");
            
            const icon = weatherData.weather[0].icon;
            console.log(icon);

            const img = "http://openweathermap.org/img/wn/"+icon+"@4x.png";

            res.write("<img src="+img+">");

            res.send();
        });
    })

});



app.listen(3000,function(){console.log("aa gaye tu 3000 pe")})


//
// https.get(url,function(respone){
//     console.log(respone.statusCode);

//     respone.on("data",function(data){
//         console.log(data);
//     });

//     respone.on("data",function(data){
//         const weatherData = JSON.parse(data);
//         console.log(weatherData);

        

//         // var object = {a:1,b:2,c:3};

//         // console.log(JSON.stringify(object));

//         //get specific data 
//         const temp = weatherData.main.temp;
//         console.log(temp);
//         //___________________
        
//         //get weather description

//         const desc = weatherData.weather[0].description;
//         console.log(desc);
        
//         const icon =weatherData.weather[0].icon;
//         console.log(icon);

//         res.write("<h1>the temp at kanpur is "+temp+" Degree celseus.<h1>");
//         res.write("<h3>weather is "+desc+"<h3>");

//         const imgUrl ="http://openweathermap.org/img/wn/"+icon+"@4x.png";

//         res.write("<img src="+imgUrl+">");

//         res.send();


//     });

    
// });



// });