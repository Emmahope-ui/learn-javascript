//switch
let a = 2+ 2;
switch (a){
    case 3:
        alert ("too small");
        break;
        case 4:
            //without the breaks the code will run to the end of the switch.
            alert("exactly");
            break;
            case 5:
                alert("too big");
                break;
                default:
                    alert("I don't know such values");
}


//2.0
let x = "1";
let b = 0;

switch (+x) {   // <-- converts a to a number
  case b + 1:    // <-- b + 1 = 1
    alert("this runs, because +a is 1, exactly equals b+1");
    break;

  default:
    alert("this doesn't run");
}
