const v=document.querySelectorAll("button");
for( let btn of v){
    btn.addEventListener("click",()=>{
        console.log("button was clicked");
    });
}