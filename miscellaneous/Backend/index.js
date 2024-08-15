const express=require("express");
const app=express();
const port=7000;
app.use(express.urlencoded({ extended: true }));


app.get("/register",(req,res)=>{
    let {user,pass}=req.query;

    res.send(`welcome to this wolrd ${user}`);
    
});


app.post("/register",(req,res)=>{
    let {user, password }=req.body;
    res.send(`the user name is ${user}`)
    
});
app.listen(port,(req,res)=>{
    console.log(`the port number is${port}`);

});