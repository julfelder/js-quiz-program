// variables
var correct = 0;

// prompt
var answer1 = prompt("2+2=?");

// if statement
if ( answer1.toUpperCase() === '4' ) {
 correct += 1;
}
var answer2 = prompt("what is the world's largest ocean?");

if(answer2.toUpperCase() === 'PACIFIC'){
 correct +=1;
}

var answer3 = prompt("How many planets are in our solar system?");

if(answer2.toUpperCase() === '8'){
 correct +=1;
}
var answer4 = prompt("In what year did the first man land on the moon?");

if(answer4.toUpperCase() === '1969'){
 correct +=1;
}

var answer5 = prompt("In which play can you find the To Be or Not To Be soliloquy?");

if(answer5.toUpperCase() === 'HAMLET'){
 correct +=1;
}
// output results
document.write("<p>You Scored</p>" + corect);
