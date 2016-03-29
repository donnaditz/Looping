$(document).ready(function() {
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
});
