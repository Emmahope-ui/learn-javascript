//functions fundamentals
//function declarations
//function executions
//arrow function|call stack| nested funtions| scope closure|call back functions HOF|pure functions| IIFE recursion
function fruits() {
    console.log("printing....");
}
fruits()

//whatever is inside the parenthesis when declaring the function is called parameter 
function printThis(param){
    console.log(param);
}
//the value of the function is called an argument
printThis("emmanuel");

const count = function (){
    console.log("print");
}
const countAgain = function (){
    console.log("print");
}
count();
countAgain();
const countAgainparam = function (a, b){
    console.log(a,b);
}
countAgainparam(10, 20);

function sum(a, b){
    return a + b;
}
console.log(sum(2, 5));

function Sum(a, b){
    let result = a + b;
    return result;
}
console.log(Sum(5, 15));

//default parameters
function calc(a, b=1){
    return 2 * (a + b);
}
console.log(calc(3,5));
console.log(calc(6));

/* rest parameter, a function definition can only have one parameter and must be the last parameter you give to a function*/
function collectThings(x, ...y){
    console.log(x);
    console.log(y);
}
collectThings(1,2,3,4,5,6,7,8,9,10);

/* arrow functions
converting
const add = function(x,y){
   return x + y;
} into an arrow function*/
 const add = (x,y) => x + y;
 console.log(add(2,3));

 //nested functions
 function outer(){
    console.log("outer")
    function inner(){
        console.log("inner")
    }
     inner();
 }
 outer();

 //function scope, variables defined in a function cannot be accessed outside the function and a function can access all variables inside the scope it is defined
function doSomething(){
    let x = 10;
    const y = 20;
    var z = 30;
    console.log(x,y,z)
}
doSomething();

//closures
 function Outer(x){
    console.log("outer");
    function Inner(y){
        console.log("inner");
        return x + y;
    }
     return Inner;
 }
 const OuterReturn = Outer(10);
 console.log(OuterReturn(5)); 

 //callback functions
 function food(bar){
    //callback
    bar();    
 }
food(
    //a function without a name is an anonymous function 
    function(){
        console.log("bar");
    }
)

function named(){
    console.log("bar");
}
food(named);

function cool(bar){
    if(itsNight){
        bar();
    }
    if(isDay){
        bar();
    }
}

/*Higher order function
1.takes one or more functions as argument 
2.it may return a function*/
function getCapture(camera){
    camera();
}
getCapture(
    function(){
        console.log("cannon");
    }
)

function returnFn(){
    return function(){
        console.log("returning");
    }
}
const fn = returnFn();
fn();

//pure function, A pure function always returns the same output for the same input and has no side effects
function sayGreeting(name){
    return `Hello ${name}`;
}
console.log(sayGreeting("Emmanuel"));

//IIFE , execute the function immediately its defined                                                                                                                                   
(function x(){
    console.log("IIFE")
})()

//call stack When JavaScript runs a function, it places that function on top of the stack.
//When the function finishes, it comes off the stack.
function greet(){
    sayName();
}
function sayName(){
    console.log("Emmanuel");
}
greet();

//recursion is a function that calls itself
/*function foo(){
}
function foo(){
    console.log("foo");
    foo();
}
foo();*/

//base recursion
function recurse(){
    if (base_condition){
        return; 
    }
    recurse; 
}


function fetchwater(count){
    if(count === 0){
        console.log("no more water left");
        return;
    }
    console.log("fetching water ....");
    fetchwater(count-1);
}
fetchwater(5);