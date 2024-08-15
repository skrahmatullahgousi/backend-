const express=require("express");
const app=express();
const port=3030;
app.set("view engine","ejs");
app.get("/",(req,res)=>{
   console.log("you are in right");

});

app.get("/rolldice",(req,res)=>{
    let dicevalue=Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs",{dicevalue});
});


//views
const path=require("path");
//the mainly views are used for templates
app.set("views",path.join(__dirname,"/views"));
app.listen(port,(req,res)=>{
    console.log(`it was listening the port number${port}`);
})


//for making static files which contain js and css we should have a public folder 
app.use(express.static(path.join(__dirname,"/public/css")));
app.use(express.static(path.join(__dirname,"/public/js")));

 

//insta template
app.get("/ig/:username",(req,res)=>{
   
    let {username}=req.params;// this for obtainig parameters
    const dirs=require("./data.json"); //it is a object
    let instadata=dirs[username];// we are ascsessing the data from params
    if(instadata){
    res.render("insta.ejs",{instadata});
    }
    else{
        res.render("error.ejs",{instadata})
    }

});

