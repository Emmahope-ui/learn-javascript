function showMessage(){
    console.log("Hello world!");
}
showMessage();

//2.0
let userName = "Emmanuel";
function message() {
    let outcome = "Hello"+ " " + userName;
    console.log(outcome);
}
message();

//3.0 parameters
function staffs(from,text){
    console.log(from+":"+text);
}
staffs("Fred","hello");
staffs("Fred","whats up");

//4.0
function ShowMessage(From,Text){
    From = "*" + From + "*";
    console.log(From + ':' + Text);
}
let From = "Samson";
ShowMessage(From,"Hello");
console.log(From);
/*When a value is passed as a function parameter, it’s also called an argument.

In other words, to put these terms straight:

    A parameter is the variable listed inside the parentheses in the function declaration (it’s a declaration time term).
    An argument is the value that is passed to the function when it is called (it’s a call time term).

We declare functions listing their parameters, then call them passing arguments.

In the example above, one might say: “the function showMessage is declared with two parameters, then called with two arguments: from and "Hello"”.*/