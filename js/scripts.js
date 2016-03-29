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
    var inputNum = $("input#input1").val();
    var resultNum = inputNum;

    for (var index = 1; index < inputNum; index += 1) {
      resultNum = resultNum * index;
    }

    $("#factorial-result").text("Result: " + resultNum);

    event.preventDefault();
  });
// End Factorial ----------
// Start Palindrome ----------
  $("#palindrome form").submit(function(event) {
    var inputWord = $("input#word").val();
    var delCharacters = [" ", ".", ",", "?", "!", ";", "(", ")"];

    for(var index = 0; index < inputWord.length; index += 1) {
      delCharacters.forEach(function(checkCharacter) {
        inputWord = inputWord.replace(checkCharacter, "");
      });
    };

    inputWord = inputWord.toLowerCase();

    var reverseWord = inputWord.split("").reverse().join("");

    if (reverseWord === inputWord) {
      $("#palindrome-result").text("This is a palindrome.");
    } else {
      $("#palindrome-result").text("Nice try, but this is not a palindrome.");
    }

    event.preventDefault();
  });
// End Palindrome ----------
// Start Prime Number ----------
  $("#prime form").submit(function(event) {
    var inputNum2 = $("input#input2").val();
    var arrayNum = [];
//     var primeControl = [2, 3, 5, 7];
// console.log(inputNum2)
//     inputNum2 = parseInt(inputNum2);
//
//     primeControl.forEach(function(firstCheck) {
//       if (firstCheck === inputNum2) {
//         arrayNum.push(firstCheck)
//       }
//       else {
//
//       }
//     });

    for (var index = 2; index <= inputNum2; index += 1) {
      arrayNum.push(index);
    }
console.log(arrayNum)

    event.preventDefault();
  });
// End Prime Number ----------
});
