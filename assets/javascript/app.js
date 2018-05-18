/* GET THE DAMN TIMER TO WORK
window.onload = function() {
    $("#start").on("click", stopwatch.start);
    $("#reset").on("click", stopwatch.reset);
  };

var countdown = Math.floor((distance % (1000 * 30)) / 1000);
var intervalId;
var clockRunning = false;

// document.getElementById("timer").innerHTML = "Time remaining: " + countdown;

var stopwatch = {

  time: 0,

  reset: function() {
    stopwatch.time = 0;
    $("#timer").text("00:00");
  },

  start: function() {
    if (!clockRunning) {
      intervalId = setInterval(stopwatch.count, 1000);
      clockRunning = true;
    }
  },

  count: function() {
    stopwatch.time--;
    var converted = stopwatch.timeConverter(stopwatch.time);
    console.log(converted);
    $("#timer").text(converted);
  },
  
  timeConverter: function(t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);
    //var secons = t % 60;

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
  }
};
*/

var count=30;

var counter=setInterval(timer, 1000);

function timer()
{
  count=count-1;
  if (totalAnswers === questions.length) {
     clearInterval(counter);
      alert("Game Over! Answers: 1-Pikachu, 2-Gyarados, 3-Ninetails, 4-Mewtwo, 5-MissingNo., 6-Chansey, 7-Electabuzz, 8-Kangaskhan, 9-Gengar, 10-Porygon");
     return;
  }
  else if (count <= -1) {
    clearInterval(counter);
      alert("Game Over! Answers: 1-Pikachu, 2-Gyarados, 3-Ninetails, 4-Mewtwo, 5-MissingNo., 6-Chansey, 7-Electabuzz, 8-Kangaskhan, 9-Gengar, 10-Porygon");
     return;
  }

 document.getElementById("timer").innerHTML="You have " + count + " seconds left!";
}





/* working! (change button color after clicked)
$(".q1btn").click(function(){
  $(this).toggleClass("lastClick");
})
*/


/* GET THE DAMN BUTTONS TO WORK
var clicked = false;

$(".q1btn").click(function(){
  if(clicked){
    $(this).toggleClass("lastClick");
    clicked = true;
} else {
    $(this).toggleClass("lastClick");
    clicked = false;
}
})
*/

/*
$(".q1btn").click(function() {
  $(".q1btn").not(this).removeClass("lastClick");
  $(this).toggleClass("q1btn");
})
*/

/* super doesnt work, leave this one...
$(".q1btn").click(function() {
  var ask = document.getElementsByClassName(".q1btn");
  blah = false;
  if ($("#1a").is("")) {
    $("#1a").toggle(true);
  }
  else if ($("#1b").is("")) {
    $("1b").toggle(true);
  }
  else if ($("#1c").is("")) {
    $("1c").toggle(true);
  }
  else if ($("#1d").is("")) {
    $("1d").toggle(true);
  }
})
*/

/*
$(".q1btn").click.removeClass(".active")
$(this).addClass(".active")
*/

/*
$(".q1btn").click(function() {
  $(this).toggleClass("active");
})
*/

$(".q1btn button")

var questions = [{
  problem: "Which Pokemon is NOT one of the original starters?",
  answers: ["Bulbasaur", "Charmander", "Squirtle", "Pikachu"],
  answer: "Pikachu",
},
{
  problem: "Which Pokemon is a Water type?",
  answers: ["Rapidash", "Gyarados", "Victreebel", "Dragonite"],
  answer: "Gyarados",
},
{
  problem: "Which Pokemon evolves from Vulpix?",
  answers: ["Dewgong", "Onix", "Ninetails", "Scyther"],
  answer: "Ninetails",
},
{
  problem: "Which Pokemon is NOT one of the legendary birds?",
  answers: ["Mewtwo", "Moltres", "Articuno", "Zapidos"],
  answer: "Mewtwo",
},
{
  problem: "Which Pokemon was the hidden glitch?",
  answers: ["Farfetch'd", "Hitmonlee", "MissingNo.", "Hitmonchan"],
  answer: "Missingno",
},
{
  problem: "Which Pokemon is found in the Safari Zone?",
  answers: ["Chansey", "Ponyta", "Machop", "Diglett"],
  answer: "Chansey",
},
{
  problem: "Which Pokemon is super effective against Starmie?",
  answers: ["Alakazam", "Tauros", "Fearow", "Electabuzz"],
  answer: "Electabuzz",
},
{
  problem: "Which Pokemon is NOT revived from a fossil?",
  answers: ["Aerodactyl", "Kangaskhan", "Kabutops", "Omastar"],
  answer: "Kangaskhan",
},
{
  problem: "Which Pokemon is the first Ghost type?",
  answers: ["Magikarp", "Gengar", "Ditto", "Lapras"],
  answer: "Gengar",
},
{
  problem: "Which Pokemon is NOT an Eevee evolution?",
  answers: ["Flareon", "Vaporeon", "Porygon", "Jolteon"],
  answer: "Porygon",
}
]

var totalAnswers = 0;
for (let i = 0; i < questions.length; i++) {
  var ask = $("<h3>").text(`${i + 1}. ${questions[i].problem}`);
  $("#bank").append(ask);
  var answerClass = "respond" + i;
  for (let j = 0; j < questions[i].answers.length; j++) {
    var answerButton = $(`<button class="${answerClass}">`).text(questions[i].answers[j]);
    $("#bank").append(answerButton);
  }
  $(`.${answerClass}`).one("click", function(event) {
    totalAnswers++;
    var questionClass = $(this).attr("class");
    $(this).toggleClass("active");
    var userGuess = $(this).text();
    questions[i].userGuess = userGuess;
    $(`.${questionClass}`).off("click");
    if (totalAnswers === questions.length) {
      console.log('game over');
      console.log(questions);
    }
  })
}

//make a loop to check answers



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