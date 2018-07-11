
var panel = $("#quiz-area");
// Question set
var questions = [{
  question: "How many branches have Ucdavis University the Sacramento?",
  answers: ["2", "3", "4", "5"],
  correctAnswer: "2"
}, {
  question: "wher is hte main office of Ucdavis University?",
  answers: ["sacramento", "Filsom", "Davis", "CA"],
  correctAnswer: "Davis"
}, {
  question: "which of the falowing date ucdavis university start as a university in davis ca?",
  answers: ["1905", "1990", "1987", "1901"],
  correctAnswer: "1905"
}, {
  question: "Which of university have the third-largest enrollment in the UC System?",
  answers: ["Uc Davis", "UCLA ", "UC Berkeley", "Sac state"],
  correctAnswer: "Uc Davis "
}, {
  question: "Hoe many Academic staff have UC Davis university?",
  answers: ["650", "1600", "1888", "2000"],
  correctAnswer: "1888"
}, {
  question: "How many Administrative stuff have Ucdavis university ?",
  answers: ["3500", "214486", "3256", "9000"],
  correctAnswer: "21486"
}, {
  question: "In 2016 how many students had the Uc davis univercity",
  answers: ["36441", "48976", "89435", "22345"],
  correctAnswer: "48976"
}, {
  question: "Who is the president of Uc davis university ",
  answers: ["Jash", "Janet Napolitano", "David A", "Ryan"],
  correctAnswer: "Janet Napolitano"
}, {
    question: "what persentage of women are undergraduates in uc davis university?",
    answers: ["34%", "67%", "59%", "39%"],
    correctAnswer: "59%"
}, {
    question: "how much will be the averege cost of Ucdavis university in one year?",
    answers: ["$35361", "$30229", "$27335", "$64356"],
    correctAnswer: "$64356"
  },];
// Variable that will hold the setInterval
var timer;
var game = {
  correct: 0,
  incorrect: 0,
  counter: 85,
  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.SUBMIT();
    }
  },
  start: function() {
    timer = setInterval(game.countdown, 1000);
    $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>85</span> Seconds</h2>");
    $("#start").remove();
    for (var i = 0; i < questions.length; i++) {
      panel.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        panel.append("<input type='radio' name='question-" + i +
        "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }
    panel.append("<button id='SUBMIT'>SUBMIT</button>");
  },
  SUBMIT: function() {
    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() === questions[0].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() === questions[1].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() === questions[2].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() === questions[3].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() === questions[4].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() === questions[5].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-6']:checked"), function() {
      if ($(this).val() === questions[6].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-7']:checked"), function() {
      if ($(this).val() === questions[7].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-8']:checked"), function() {
        if ($(this).val() === questions[8].correctAnswer) {
          game.correct++;
        }
        else {
          game.incorrect++;
        }
      });
      $.each($("input[name='question-9']:checked"), function() {
        if ($(this).val() === questions[9].correctAnswer) {
          game.correct++;
        }
        else {
          game.incorrect++;
        }
      });
    this.result();
  },
  result: function() {
    clearInterval(timer);
    $("#sub-wrapper h2").remove();
    panel.html("<h2>All SUBMIT!</h2>");
    panel.append("<h3>Correct Answers: " + this.correct + "</h3>");
    panel.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    panel.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
  }
};
// CLICK EVENTS
$(document).on("click", "#start", function() {
  game.start();
});
$(document).on("click", "#SUBMIT", function() {
  game.SUBMIT();
});