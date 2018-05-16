/* window.onload = function() {
    $("#start").on("click", stopwatch.start);
    $("#reset").on("click", stopwatch.reset);
  };
*/
var countdown = Math.floor((distance % (1000 * 30)) / 1000);
var intervalId;
var clockRunning = false;

document.getElementById("timer").innerHTML = "Time remaining: " + countdown;

$("#answer1").text("zebra");
$("#answer2").text("correct");
$("#answer3").text("correct");
$("#answer4").text("correct");
$("#answer5").text("correct");
$("#answer6").text("correct");
$("#answer7").text("correct");
$("#answer8").text("correct");
$("#answer9").text("correct");
$("#answer10").text("correct");