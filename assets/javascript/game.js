var movies = ["a goofy movie", "aladdin", "alice in wonderland", "bambi", "beauty and the beast", "cars", "cinderella", "coco", "dumbo", "finding nemo",
    "hercules", "lady and the tramp", "lilo and stitch", "moana", "monsters inc", "mulan", "peter pan", "pinocchio", "pocahontas", "robin hood",
    "sleeping beauty", "stella", "the aristocats", "the fox and the hound", "the incredibles", "the jungle book", "the lion king", "the little mermaid",
    "the princess and the frog", "toy story"];


var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var guessesLeft;

var lettersGuessed;

var wins = 0;

var losses = 0;

var currentWord;

var arrayForWord = [];

var newWord;

var dashes;

var arrayForDashes = [];

var correctLetters;

var gameStart = false;

var words; //for array (movies)

var index;

function begin() {
    console.log("function begin called");
    gameStart = true;
    index = Math.floor(Math.random() * 30);
    lettersGuessed = [];
    correctLetters = 0;
    currentWord = movies[index];
    
    
    dashes = useDashesHere(movies[index]);
    console.log(dashes);
    document.getElementById("cw").innerHTML = dashes.split(",");
    guessesLeft = 10 - currentWord.length;
    arrayForWord = currentWord.split('');
    arrayForDashes = dashes.split('');
    words = movies[index];
    var test = document.getElementById('cw');
    console.log(test);
    var test = document.getElementById('lg');
    console.log(test);
    var test = document.getElementById('gl');
    console.log(test);
    
    // document.getElementById('currentWord').innerHTML = "--";
    // document.getElementById("lettersGuessed").innerHTML = "--";
    // document.getElementById("guessesLeft").innerHTML = "h";
    // document.getElementById("wins").innerHTML = wins;
    // document.getElementById("losses").innerHTML = losses;
}

function useDashesHere(word) {
    var dashes = "";
    for (i = 0; i < word.length - 1; i++) {
        dashes += "_ ";
    }
    dashes += "_"
    return dashes;
}

function gameStart(key) {
    var key = key.toLowerCase();

    if (alphabet.indexOf(key) > -1) {
        if (arrayForWord.indexOf(key) > - 1) {
            correctLetters++;
            displayKey(key);
        }
        else {
            if (lettersGuessed.indexOf(key) > - 1) {
                return;
            }
            else {
                guessesLeft--;
                document.getElementById("gl").innerHTML = guessesLeft;
                lettersGuessed.push(key);
                document.getElementById("lg").innerHTML = lettersGuessed.join('');
                if (guessesLeft == 0) {
                    alert("Incorrect! The correct word is " + currentWord);
                    gameStart();
                    losses++;
                    document.getElementById("lossses").innerHTML = losses;
                }

            }
        }
    }
}
function displayKey(key) {
    for (i = 0; i < currentWord.length; i++) {
        if (key == arrayForWord[i]) {
            dashes[i * 2] = key;
            console.log(dashes);
        }
    }
    document.getElementById("cw").innerHTML = arrayForDashes.join("");
    didYouWin();

}
function didYouWin() {
    if (arrayForDashes.indexOf("_") === -1) {
        alert("Correct!" + currentWord);
        wins++;
        document.getElementById("winss").innerHTML = wins;
       // begin();
    }
}
document.onkeyup = function (event) {
    

    // if (gameStart===false) { 
    //     console.log(event.key);
    //     // document.getElementById("play").innerHTML = "";
    //    // begin();
    //     document.getElementById("cw").innerHTML = dashes.split(",");
    //     // begin = true;
    // }
    // else {
    //     console.log(event.key);
    //      gameStart= (event.key);
    // }

    console.log(event.key)
}

begin();




    // var movie = movies [Math.floor(Math.random() * movies.length)];

// var answerArray = [];
// for (var i = 0; i < movie.length; i++) {
//     answerArray[i] = "_";
// }

// var remainingLetters = movie.length;

// while (remainingLetters > 0) {
//     alert(answerArray.join(" "));
// }

// var guess = prompt("Guess a letter or get lost!");
// if (guess === null) {
//     break;
// } else if (guess.length !==1) {
//     alert("Please enter one letter at a time");
// } else {

// for (var j = 0; j < word.length; j++) {
//     if (word[j] === guess) {
//         answerArray[j] = guess;
//         remainingLetters--;
//     }
// }
// }
// alert(answerArray.join(" "));
// alert("Correct! The answer was " + word);



//array of words chosen by the computer. computer randomly generating a number to pluck out a particular word.

