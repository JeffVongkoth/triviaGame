$(document).ready(function() {
    // create variables and arrays
    var correctAns = 0;
    var incorrectAns = 0;
    var unAns = 0;
    var countDown = 20;
    var intervalId;
    var triviaQ = [
    {
        question: "What years were mk4 supra's availible in the US?",
        choices: "93-98, 92-95, 89-96, 93-02",
        answer: 1,
    },
    {
        question: "The gentleman's agreement limited HP from japanese manufacturers to what HP??",
        choices: "189, 303, 276, 241,",
        answer: 2,
    },
    {
        question: "What japanese vehicle earned the nick name 'Godzilla'?",
        choices: "Toyota Supra, Mazda RX7, Acura NSX, Nissan Skyline",
        answer: 3,
    },
    {
        question: "What is the engine code for the 1993 Mazda RX7?",
        choices: "4AGE, 2JZ-GTE, 13B-REW, RB26DETT",
        answer: 2,
    },
    {
        question: "Which of these has the fastest 1/4 mile times?",
        choices: "Nissan Skyline, RX7, Acura NSX, Toyota Supra",
        answer: 3,
    },
    {
        question: "Which of the manufacturers won the WRC 3 years in a row?",
        choices: "Mitsubishi, Nissan, Subaru, Toyota",
        answer: 2,
    },
    
];
console.log(triviaQ[0].question)
// hide choice buttons until game start is pressed
$(".choice").hide()
//generate a random question
function genQ() {
    for ( var i = 0; i < triviaQ.length; i++){
        // $("#question").append("<h2>" + triviaQ[Math.floor(Math.random())].question + "</h2>");
        console.log(i)
    }
 

}
function run() {
    intervalId = setInterval(decrement, 1000);
  }
  function decrement() {

    $("#countdown").html("<h2>" +"Time Remaining: " + countDown + "</h2>");


    countDown--;

    if (countDown === -1) {
        stop();


    }
function stop() {

  clearInterval(intervalId);
}
}

$(".gamestart").click(function() {
    run();
    decrement();
$(".gamestart").hide();
$(".choice").show();
genQ();
$

})

})

// create a function that shows questions in a for loop