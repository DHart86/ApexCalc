$( document ).ready(function() {




$(".calcButton").on("click", function() {
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
  
   function bigDay(weigh, per) {
      level = $("#acLev").val();
      var tdeeBig = (((((100 - per) / 100) * weigh * 9.79759519) + 370) * level) * goal;

      return ((tdeeBig * 7) - ((tdeeBig - 300) * 5)) / 2; 
  }
  
  function smallDay(weigh, per) {
      level = $("#acLev").val();
      var tdeeSmall = ((((((100 - per) / 100) * weigh * 9.79759519) + 370) * level) * goal) - 300;

      return tdeeSmall; 
  }
  
  
  
  $("#result").text(Math.round(tdee(weight, bfper)) + " cals/day");

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
  $("#or").text("OR");
  $("#smallday").text("5 days of " + Math.round(smallDay(weight, bfper)) + " calories");
  $("#bigday").text("2 days of " + Math.round(bigDay(weight, bfper)) + " calories");
});


});