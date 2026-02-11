const maxScore = 100;
let userScore = 77;
switch(true){
    case userScore < 0 || userScore > maxScore:
         console.log("invalid");
         break;
          case userScore >= 70 && userScore < maxScore:
         console.log("A");
         break;
         case userScore >= 60:
            console.log("B");
            break;
            case userScore >= 50:
                console.log("C");
                break;
                case userScore >= 40:
                    console.log("D");
                    break;
                    case userScore <= 39:
                        console.log("trail");
                        break;
                         default:
                            console.log("fail")
}