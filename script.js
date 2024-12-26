// const value=require("./math");
// console.log(value.sum(2,3));

// const car=require("./cars");
// console.log(car[0].name);

// const figlet = require("figlet");

// figlet("dushyant", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });

// import{sum,multi}from"./math.js";

// console.log(sum(2,3));
// console.log(multi(4,1));
// import { generate, count } from "random-words";

// console.log(generate());

// import { generate } from "random-words";

// console.log(generate({minLength:5,maxLength:5}));
let express=require("express");
let app=express();
let port=8080;

app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
});
