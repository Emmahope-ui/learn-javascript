//while loop
let i = 0;
while (i<3){
    alert(i);
    i++;
}

//2.0
let a = 3;
while (a){
    alert(a);
    a--;
}

//3.0 do while loop
let b = 0;
do {
    alert(b);
    b++;
} while (b<3);

//4.0 for loop
for (let c = 0; c < 3; c++){
    alert(c);
}
/*let i = 0; // we have i already declared and assigned

for (; i < 3; i++) { // no need for "begin"
  alert( i ); // 0, 1, 2
}   OR
   
let i = 0;

for (; i < 3;) {
  alert( i++ );
}
  
for (;;) {
  // repeats without limits
}*/

//5.0 break and continue
let sum = 0;
while (true) {
    let value = +prompt("Enter a number", "");
    if (!value) break;
    sum += value;
}
alert(sum + "Sum");

/*for (let i = 0; i < 10; i++) {

  // if true, skip the remaining part of the body
  if (i % 2 == 0) continue;

  alert(i); // 1, then 3, 5, 7, 9
}*/