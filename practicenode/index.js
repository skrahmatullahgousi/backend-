//search string
const express=require("express");
const app=express();
const port=8000;
app.listen(port,()=>{
    console.log(`the app is listing the port nbumber${port}`);
});
app.get("/search",(req,res)=>{
    let{v} = req.query;
    res.send(`the vaue is the ${v}`);
})
app.get("/anyvalue",(req,res)=>{
    let {find}=req.query;
    res.send(`the found valuse is ${find}`);
})