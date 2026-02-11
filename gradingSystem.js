//KNUST GRADING SYSTEM USING CONTROL STATEMENTS
const maxscore = 100;
let userscore = 101;

if (userscore < 0 || userscore > maxscore) {
    console.log("Invalid score");
} else if (userscore >= 70) {
    console.log("A");
} else if (userscore >= 60) {
    console.log("B");
} else if (userscore >= 50) {
    console.log("C");
} else if (userscore >= 40) {
    console.log("D");
} else {
    console.log("F");
}

