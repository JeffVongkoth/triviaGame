$(document).ready(function() {
    var correctAns = 0;
    var incorrectAns = 0;
    var unAns = 0;
    var countDown = 10;
    var intervalId;
var input = $( "form input:checkbox" )
  .wrap( "<span></span>" )
$(".gamestart").click(function() {

    $(".gamestart").replaceWith( "<h2>What years were the mk4 Supras availible in the states?</h2>" + "<br>" +
"<h2> In japan the gentleman's agreement was?</h2>" + "<h2> In japan the gentleman's agreement was?</h2>" +"<h2> In japan the gentleman's agreement was? </h2>" );

$("#start").css({
    "background-color": "rgba(198, 60, 0, 1)",
    "margin": "10% 19% 0 25%",
    "border-radius": "15px 15px 15px 15px",
    "color": "white",
    "width": "50%",
    "height": "100%"
});
    function run() {
        intervalId = setInterval(decrement, 1000);
      }
      function decrement() {

        $("#countdown").html("<h2>" + countDown + "</h2>");

        countDown--;

        if (countDown === -1) {
            stop();


        }
    function stop() {

      clearInterval(intervalId);
    }
    }
run();
})

}
);