// function

// defination // hoisting 

// function hello(str){

// console.log("hello",str)
//     return "how are you"
// }
// var result=hello("abhi")
// console.log("result",result)

// // calling
// // c c++ java c#

// console.log("a",a)
// var a=10
// create a emi calculator  input (salry ,homeloan,carloan,credit card bill)
// calculate savaing 
var person ={name:"abhi"}//refrence type
console.log("name",person.name)

var a=10;
obj1={name:"ravi"}
function callByValOrRef(no,obj){
 no=30;
 obj.name="kavi"

}

console.log("before calling",a)
console.log("before calling",obj1)
callByValOrRef(a,obj1)
console.log("after calling a",a)
console.log("after calling obj1",obj1)
