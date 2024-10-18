// var users = [{
//    name: "Sagar",
//    metadata:{
//     profilespicture:"",
//     pronouns:"he/him",


//    }

// }]

const express = require("express");
const app =express();
const users = [{
    name:"Manna",
    kidneys: [{
        healthy:false
    }]
}]
app.get("/", function (req ,res){
    //write logic
    const Manna=users[0].kidneys;
    const numberOfKidneys= kidneys.length;
    let numberOfKidneys=0;
    for(leti=0;i<Manna.length;i++){
    for(Manna[i].healthy){
        numberOfKidneys=numberOfKidneys+1;
    }

}
const numberOfKidneys=numberOfKidneys-numberOfKidneys;
res.json{
    
}
    })