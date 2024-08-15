
const express= require("express");
let app=express();
 let port=8080;
 app.listen(port,() =>{
    console.log(`the app is listing on the${port}`);
 });
//by app.get
/*app.get("/request",(req,res)=>{
    res.send("you contact the apple root path");
 })

 */

 //the app listing the request
  //to request use
  /*app.use((req,res)=>{
   //console.log(req);
    console.log(" request recived");
    res.send(
        "<h1>hai this sending response</h1><li>mango</li><li>apple</li>"

);
  });*/
 /* app.get("/router",(req,res)=>{
    res.send("it the secound request path");
  });
  app.post("/postrouter",(req,res)=>{
    res.send(" this post router");
  })
    */


  //parameter
 
 /* app.get("/:username/:id",(req,res)=>{
    let{ username, id }=req.params;
    let h1=`<h1>welcome to this world of${username}</h1>`;
    res.send(h1);
});
*/
// querey string
app.get("/search",(req,res)=>{
  
  let {r}=req.query;
  if(!r){
    res.send("there is no result");
  }

  res.send(`<h1>the rquired result is ${r}</h1>`);
});