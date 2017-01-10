$( document ).ready(function() {


function calcCals() {
  weight = $("#firstNumber").val();
  bfper = $("#secondNumber").val();

  // RADIO
  var radios = $('[name="blkcut"]');
  var goal;
  for (var i in radios) {
    if (radios[i].checked) {
      goal = radios[i].value;
    }
  }

  //ACTIVITY LEVEL
  function tdee(weigh, per) {
    level = $("#acLev").val();
    return (((((100 - per) / 100) * weigh * 9.79759519) + 370) * level) * goal;
  }
  $("#result").text(Math.round(tdee(weight, bfper)) + " calories");

  //PROTEIN
  function prot(weigh, per) {
    return (((100 - per) / 100) * weigh);
  }
  $("#protein").text("Protein: " + Math.round(prot(weight, bfper)));

  //FAT
  function fat(weigh, per) {
    return (((100 - per) / 100) * weigh * 0.4);
  }
  $("#fats").text("Fat: " + Math.round(fat(weight, bfper)));
}

});