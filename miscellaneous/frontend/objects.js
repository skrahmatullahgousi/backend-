let arr1=[1,256,4]
arr1.sayhello=()=>{
    console.log("hai i am array1");

}
let arr2=[5,2,6]
arr2.sayhello=()=>{
    console.log("hai i am array2");
}
//this 2 type of creating objects
// consturcters
 // syntax function name of function
 //function constructer name
 //and we have to crate a other porperty or function by useing the prototype (actual prototype of constructer) 
function Creatingconstructer(name,age){
    this.name=name;
    this.age=age;
}
Creatingconstructer.prototype.speak=function(){
    console.log(`his name is ${this.name}`);
}
//crating object by useing the new keyword
let p1=new Creatingconstructer("construter",1);
 

//by class
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;

    }
    try(){
       console.log(`this my name ${this.name}`);
    }
}
 let v=new Person("rahmath",89);

//INNHERTENCE BY USEING 
class mamal{
    constructor(name){
        this.name=name;
    }
    eat(){
        console.log(`the mamals eats something`);

    }
} 
class dog extends mamal{
    constructor(name){
        super(name);
    }
    
    bark(){
        console.log(`the dog eat bones `);
}
}

class cat extends mamal{
    constructor(name){
        super(name);
    }
    meaw(){
        console.log(`the cat eat fish`);
}
}