var numbers = function(number) {
  var inputNumber = [];
  for (var index = 1; index <=number; index ++) {
    if (index % 3 === 0 && index % 5 === 0) {
      inputNumber.push("pingpong");
    }
    else if (index % 3 === 0) {
      inputNumber.push("ping");
    }
    else if (index % 5 === 0) {
      inputNumber.push("pong");
    }
    else {
      inputNumber.push(index);
    }
  }

  return inputNumber;
};

$(document).ready(function() {
  $("form#game").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("#enterNumber").val());
    if(number <=0) {
      alert("Please enter a number => 1.");
    }
    var result = numbers(number);
    $("#output").empty();
    for (var index=0; index <=result.length-1; index++) {
      $("#output").append("<li>"+result[index]+"</li>");
    };
  });
});
