// var text = '{"employees":['+
// '{"firstName":"John","lastName":"Doe"},'+
// '{"firstName":"Anna","lastName":"Smith"},'+
// '{"firstName":"Peter","lastName":"Jones"}]}';

// obj = JSON.parse(text);
// document.getElementById("demo").innerHTML =
// obj.employees[1].firstName + " " + obj.employees[1].lastName;\
// var numbers =[1,2,3,4];
// var result = nuumbers.map(n=>n*2);
// console.log()
// Promises
// A promise represents the result of asynchronous operation
// var promise =new Promise ((resolve,reject)=>{
//     let success =true;
//     if(success)
//         resolve("data loaded");
//     else
//         reject("Error occured";
// });
// // then works when problem is resolved
// // catch works when problem is reject
// promise.then(result)
// var promise = new Promise((resolve,reject)=>{
//     let success = true;
//     if(success)
//         resolve("Data Loaded");
//     else
//         reject("Error Occurred");
// });
// promise.then(result => console.log(result))
// .catch(error => console.log(error));
// try{
//     var x=y+10;
// }
// catch(error)
// {
// console.log(error.message);
// }
// store always in the form of string 
// locl toreage.setitem("name","jeet");
// var name1=localStorage.getItem("name")
var user ={name:"jeet",age:50};
localStorage.setItem("user",JSON.stringify(user));
var data =JASON.parsel(localStorage.getItem("user"))
console.log(data.name);
