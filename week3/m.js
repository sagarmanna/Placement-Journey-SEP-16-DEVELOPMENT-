const express = require("express");

const app = express();

app.get("/health- checkup", function(req,res){
    const username = req.headers.username;
    const passward = req.headers.passward;
    const kidneyId = req.query.kidneyid;

    if(username === "sagar" && passward === "pass"){
        if(kidneyId==1 || kidneyId==2){
        //do something with kidney here 
        res.json({
            msg: "your kidney is fine!"
        })
    } else {
        res.json({
            msg: "bad input"
        })
    }
}

});
app.listen(3000);