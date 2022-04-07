
const v = require("supervillains");
const h = require("superheroes");

var superheroes_name = h.random();
var villans_name = v.random();

console.log("villans name: "+villans_name);

villans_name = v.random();
console.log("heroes name: "+superheroes_name);

