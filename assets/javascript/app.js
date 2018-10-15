var score = 0;
var questionIndex = 0;
var counter=15;
var timerId;
var audio = new Audio("assets/images/halloween.mp3");
var scream = new Audio("assets/images/scream.mp3");
var laugh= new Audio("assets/images/laugh.mp3");
var questions = [
  { q: "In what movie was a spell cast?", a: "The Covenant", b: "Scream 4", c: "I Frankenstien", d: "The Mist", correct: "The Covenant" },
  { q: "If something was bothering me on Halloween who would I call?", a: "The Police", b: "Your Family", c: "Ghostbusters", d: "your mother", correct: "Ghostbusters" },
  { q: "I am a mask man who kept coming back so they sent me to space. who am I ?", a: "Michael Myers", b: "Jason Vorhees", c: "Freddy Kruger", d: "leather Face", correct: "Jason Vorhees" },
  { q: "I am a masked killer who always comes after my sister who turns out really isn't my sister. who am I?", a: "Jason Vohees", b: "Freddy Kruger", c: "Michael Myers", d: "Norman Bates", correct: "Michael Myers" },
  { q: "On this night we decorate houses with eggs and toilet tissue", a: "Halloween", b: "Christmas Night", c: "Thanksgiving Night", d: "Mischief Night", correct: "Mischief Night" }
];




$("#btn").on("click",function(){
  startQuestion();
 

})




function startQuestion() {
  $("#wrong").empty();
  $("#youwin").empty();
  startclock();
  $("#btn").hide();
  audio.play();

  if (questionIndex <= (questions.length - 1)) {
    $("#questions").text(questions[questionIndex].q);
    $("#answer_a").text(questions[questionIndex].a);
    $("#answer_b").text(questions[questionIndex].b);
    $("#answer_c").text(questions[questionIndex].c);
    $("#answer_d").text(questions[questionIndex].d);
  }
  else {
    $("#questions").text("Game Over!");
    $("#score").text("Final Score: " + score + " out of " + questions.length);
    
    $("#answer_a").empty();
    $("#answer_b").empty();
    $("#answer_c").empty();
    $("#answer_d").empty();
    stopclock()
  }
} 

function reset() {

  counter = 15;

}

function updateScore() {
  $("#score").text("Score: " + score);
}

function startclock(){
  
  timerId=setInterval(timer,1000);
}

function stopclock(){
  clearInterval(timerId);
  
}

function timer(){
counter--;
$("#counter").text(counter);
if (counter<=0){
  stopclock()
  $("#wrong").text("Wrong")
  questionIndex++;
  counter=15
  startQuestion();

}
}






$(".answers").on("click", function () {
  var selectedanswer = $(this).text()

  if (selectedanswer === (questions[questionIndex].correct)) {
    $("#youwin").text("Correct")
    laugh.play();
    score++;
    updateScore();
    questionIndex++;
stopclock();
reset();

    
  }
  else {
    $("#wrong").text("Wrong")
    scream.play();
    questionIndex++;
    stopclock();
    reset();

  }
  setTimeout (function(){
    startQuestion();
    },700);



})
