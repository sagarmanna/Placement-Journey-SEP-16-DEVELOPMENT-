
// creating an http server
// express
// node default library 

const express=require("express");

function(n){
    let ans =0;
    for(let i=1;i<=n;i++{
        ans+=i;
    }
    return ans;
}   
const app=express();

app.get("/",function(req,res){
    const n=req.query.n;
    res.send("hi there");
})
app.listen(3000);






