$(document).ready(function() {
// Word Puzzle ----------
  $("button#puzzle").click(function(){
    var original = "Believe you can and you are halfway there. Theodore Roosevelt";
    var vowels = ["a", "e", "i", "o", "u"];

    for(var index = 0; index < original.length; index += 1) {
      vowels.forEach(function(checkVowel) {
        original = original.replace(checkVowel, "-");
      });
    };
    $("#result").text(original);
  });

  $("button#answer").click(function() {
    $("#input").show();
  });
// End Word Puzzle ----------
// Start Factorial ----------
  $("#factorial form").submit(function(event) {
    var inputNum = $("input#number").val();
    var resultNum = inputNum;

    for (var index = 1; index < inputNum; index += 1) {
      resultNum = resultNum * index;
    }

    $("#factorial-result").text("Result: " + resultNum);

    event.preventDefault();
  });
});
