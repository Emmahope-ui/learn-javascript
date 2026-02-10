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

//3.0
function staffs(from,text){
    console.log(from+":"+text);
}
staffs("Fred","hello");
staffs("Fred","whats up")