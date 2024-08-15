const express=require("express");
const app=express();
const port=5050;
app.listen(port,(req,res)=>{
    console.log(`the port number is ${port}`);

})
app.set("view engine","ejs" );
const path= require("path");
app.set("views", path.join(__dirname,"/views"));

app.get("/ins/:username",(req,res)=>{
    let {username}=req.params;
    res.render("home.ejs",{username});

});
