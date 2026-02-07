let user;
//The ?? operator is the nullish coalescing operator. It only falls back if the value is null or undefined.
alert(user ?? "Anonymous");


//2.0
let firsrName = null;
let lastName = null;
let nickName = "Supercoder";
alert(firsrName ?? lastName ?? nickName);

//3.0
let height = 0;
alert(height || 100);
alert(height ?? 100);

//4,0
let energy = null;
let distance = nill;
let force = (energy ?? 100) * (distance ?? 50);
alert(force);

//4.0
let x = (1 && 2) ?? 3;
alert(x);