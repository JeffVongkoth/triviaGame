$(document).ready(function() {
    // create variables and arrays
    var correctAns = 0;
    var incorrectAns = 0;
    var unAns = 0;
    var quizDisplay = $('#question');
    var countDown = 20;
    var intervalId;
    var x = 0;
    var triviaQ = [
    {
        question: "What years were mk4 supra's availible in the US?",
        choices: ["93-98", "92-95", "89-96", "93-02"],
        answer: "93-98",
    },
    {
        question: "The gentleman's agreement limited HP from japanese manufacturers to what HP??",
        choices: ["189", "303", "276", "241",],
        answer: "276",
    },
    {
        question: "What japanese car earned the nick name 'Godzilla'?",
        choices: ["Toyota Supra", "Mazda RX7", "Acura NSX", "Nissan Skyline"],
        answer: "Nissan Skyline",
    },
    {
        question: "What is the engine code for the 1993 Mazda RX7?",
        choices: ["4AGE", "2JZ-GTE", "13B-REW", "RB26DETT"],
        answer: "13B-REW",
    },
    {
        question: "Which of these has the fastest 1/4 mile times?",
        choices: ["Nissan Skyline", "RX7", "Acura NSX", "Toyota Supra"],
        answer: "Toyota Supra",
    },
    {
        question: "Which of the manufacturers won the WRC 3 years in a row?",
        choices: ["Mitsubishi", "Nissan", "Subaru", "Toyota"],
        answer: "Subaru",
    },
    
];

// hide choice buttons until game start is pressed
// $(".choice").hide()
//generate a question
function genQChoices() {
    for (var i = 0; i < triviaQ.length; i++) {
        quizDisplay.append("<h2>" + triviaQ[i].question + "</h2>");
        for (var j = 0; j < triviaQ[i].choices.length; j++) {
          quizDisplay.append("<input type='radio' name='question-" + i +
          "' value='" + triviaQ[i].choices[j] + "''>" + triviaQ[i].choices[j]);
        }
      }
}
    
// }
// function genChoices() {
//     for (var i = 0; i < triviaQ.length; i++){
//         console.log(randQ.choices);
//         $(".choice").text(randQ.choices[x]);
        
        
        
//     }
// }

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
genQChoices();
// genChoices();
$

})

})

// create a function that shows questions in a for loop