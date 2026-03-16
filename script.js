// console.log("Hello World");
// document.write("Hello World");

// var num = 10;
// console.log(num);
// console.log(typeof(num));
// num = false;
// console.log(num);
// console.log(typeof(num));
// num = "Geet Tikkha";
// console.log(num);
// console.log(typeof(num));
// num = null;
// console.log(num);
// console.log(typeof(num));
// num = undefined;
// console.log(typeof(num));

// // function
// var sayHello = function() {
//     alert("hello world");
// }

// // array
// var numberArray = [1, 2, 3];
// var animals = new Array("cat", "dog", "mouse", "lion");

// // object
// var person = {
//     name: 'Barack Hussein Obama II',
//     age: '51',
//     title: '44th President of the United States'
// }




// const sym1 = Symbol(4);
// console.log(sym1);
// const sym2 = Symbol(4);
// console.log(sym2);
// if (sym1 == sym2) {
//     console.log("true");
// }
// else
// {
//     console.log("false")  // because each symbol is unique
// }

// {
//     alert("test");


// }

// var a = 100; var b = 13; var c = 10; var linebreak = "<br>";

// document.write("a + b + c =");
// result = a + b + c;
// document.write(result);
// document.write(linebreak);

// document.write("a + b =");
// result = a + b;
// document.write(result);
// document.write(linebreak);

// document.write("a - b=");
// result = a - b;
// document.write(result);
// document.write(linebreak);

// document.write("a / b=");
// result = a / b;
// document.write(result);
// document.write(linebreak);

// document.write("a % b=");
// result = a % b;
// document.write(result);
// document.write(linebreak);



// var a = 10;
// var b = 20;
// var linebreak = "<br />";

// document.write ("(a == b) =>");
// result = (a == b);
// document.write(result);
// document.write(linebreak);

// document.write ("(a < b) =>");
// result = (a < b);
// document.write(result);
// document.write(linebreak);

// document.write ("(a > b) =>");
// result = (a > b);
// document.write(result);
// document.write(linebreak);


// document.write ("(a != b) =>");
// result = (a != b);
// document.write(result);
// document.write(linebreak);


// document.write ("(a >= b) =>");
// result = (a >= b);
// document.write(result);
// document.write(linebreak);


// document.write ("(a <= b) =>");
// result = (a <= b);
// document.write(result);
// document.write(linebreak);





// loops

// var count;
// document.write("starting loop" + "<br />");
// for (count = 0; count < 10; count++) {
//     document.write("current count:" + count);
//     document.write("<br />");
// }
// document.write("loop stopped!");


// for in loop

// const person = {
// fname: "Ajay",
// Iname: "Singh",
// age: 25
// }
// for (let x in person) {
// console.log("person details: " + x + ":" + person[x])
// }

// const person = {
// fname: "Ajay",
// Iname: "Singh",
// age: 25
// }
// for (let x in person) {
// console.log("person details: " + x + ":" + person.x)
// // }
// var count=0;
// document.write("starting loop");
// while(count<10)
// {
//     document.write("current count:"+count+"<br/>");
//     count++;
// }
// document.write("loop stopped");
// document.write ("existing switch block");
//java script function
// function function name (parameter list)
// function myfunction()
// {
//     alert("hello world");
// }
// function sayHello(name,age)
// {
//     document.write(name+"is"+age+"is")
// }
// var res=mul(2,30);
// function mul(x,y)
// {
//     return x*y;
// }
// document.write(res);
//arrow function
//normal function
//arrow function
// var add2=(a,b)=>{
//  console.log(a+b);
// }
// add2(102,20);
// // ----------------------------------------------------------------------------
// var person={
//     name:"Jhon mac",
//     age:30,
//     ismarried:true,
//     address:{
//         street:"vijay nagar",
//         flatno:201

//     }
// }
// for (let x in person) {
//  console.log("person details: " + x + ":" + person[x])
// }
// var person2 = new Object();
// person2.name = "geet";     // to add properties to this object
// person2.age = 32;
// person2.ismarried = true;
// person2.address = {};
// person2.address.street = "nagar road";
// person2['address']['flatNO'] = 33;
// console.log(person2)
//ARRAY IS AN ODERED COLLECTION OF DATA
// OBJECT IS NOT A COLLECTION OF DATA
//ARRAY IS A SPECIAL KIND OF OBJECT
//CONST MYINFORMATIO=[]
// var myinfo=new array[];
// var myinfo1= array[];
// console.log(myinfo,myinfo1);
// let collection=[
//     [],
//     true,
//     "john"function()
//     900000000,
//     undefined,
//     null,
//     new string("jhon Me"),
// ];
// console.log(collection);
// const result=document.getElementById("para");
// result.innerHTML="my self";
// result.title="myname";
// const result2=document.getElementsByClassNae("heading");
// result2.innerHTNL="hii";
// document.getElementsByTagName("p")
// result3[2].innerHTML ="this is a pet";
// result3[1].style.color ="blue";
// result3[1].innerText ="my paragraph";
// const element = document.getElementById("myh1");
// let text=element.getAttribute("class");
// document.getElementById("demo").innerHTML=text;
// function myFunction()
// {
    // document.getElementById("myh1").setAttribute("class","democlass");
// // }
// const heading =document.createElement("h2");
// const bodytag =document.getElementsByTagName("body");
// bodytag[0],append("heading");
function onhandlfocus(){
    x.style.background="red";

}