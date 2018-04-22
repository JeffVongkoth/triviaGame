$(document).ready(function () {
    // create variables and arrays
    var correctAns = 0;
    var incorrectAns = 0;
    var quizDisplay = $('#question');
    var countDown = 20;
    var intervalId;
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


    function genQChoices() {
        for (var i = 0; i < triviaQ.length; i++) {
            quizDisplay.append("<h3>" + triviaQ[i].question + "</h3>");
            for (var j = 0; j < triviaQ[i].choices.length; j++) {
                quizDisplay.append("<div id='choice'>" + "<input type='radio' name='question-" + i +
                    "' value='" + triviaQ[i].choices[j] + "''>" + triviaQ[i].choices[j] + "</div>");
            }
        }
    }
    function finished() {
        correctAns = 0;
        incorrectAns = 0;

        $.each($("input[name='question-0']:checked"), function () {
            if ($(this).val() === triviaQ[0].answer) {
                correctAns++;
            }
            else {
                incorrectAns++;
            }
        });
        $.each($("input[name='question-1']:checked"), function () {
            if ($(this).val() === triviaQ[1].answer) {
                correctAns++;
            }
            else {
                incorrectAns++;
            }
        });
        $.each($("input[name='question-2']:checked"), function () {
            if ($(this).val() === triviaQ[2].answer) {
                correctAns++;
            }
            else {
                incorrectAns++;
            }
        });
        $.each($("input[name='question-3']:checked"), function () {
            if ($(this).val() === triviaQ[3].answer) {
                correctAns++;
            }
            else {
                incorrectAns++;
            }
        });
        $.each($("input[name='question-4']:checked"), function () {
            if ($(this).val() === triviaQ[4].answer) {
                correctAns++;
            }
            else {
                incorrectAns++;
            }
        });
        $.each($("input[name='question-5']:checked"), function () {
            if ($(this).val() === triviaQ[5].answer) {
                correctAns++;
            }
            else {
                incorrectAns++;
            }
        });
        result();
    }

    function result() {



        quizDisplay.html("<h4><img src='assets/images/burnout.gif'></h4>");
        quizDisplay.append("<h3>Correct Answers: " + correctAns + "</h3>");
        quizDisplay.append("<h3>Incorrect Answers: " + incorrectAns + "</h3>");
        quizDisplay.append("<h3>Unanswered: " + (triviaQ.length - (incorrectAns + correctAns)) + "</h3>");
    }
    function run() {
        intervalId = setInterval(decrement, 1000);
    }
    function decrement() {

        $("#countdown").html("<h2>" + "Time Remaining: " + countDown + "</h2>");

        countDown--;

        if (countDown === -1) {
            stop();
            finished();
            $("#countdown").hide();

        }
    }
    function stop() {
        clearInterval(intervalId);
    }

    $(".gamestart").click(function () {
        run();
        decrement();
        $(".gamestart").hide();
        genQChoices();
        var audioElement1 = document.createElement("audio");
        audioElement1.setAttribute("src", "assets/sounds/startup.mp3");
        audioElement1.play();


        quizDisplay.append('<h3>' + '<button type="button" class="btn btn-primary btn-lg submit">Submit</button>' + '</h3>');
        $(".submit").click(function () {
            result();
            stop();
            $("#countdown").hide();
            var audioElement2 = document.createElement("audio");
            audioElement2.setAttribute("src", "assets/sounds/2step.mp3");

            audioElement2.play();
        })
    })
});
