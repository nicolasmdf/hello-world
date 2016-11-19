$(document).ready(function(){
  var input = "";

  function update() {
    input = $("#input").val();
    if (input != "") {
      displayResults();
    }
    else {
      displayError();
    };
  };
  
  function displayResults() {
   input = $("#input").val();
   var apiQuery = encodeURI("https://en.wikipedia.org/w/api.php?action=opensearch&search=" + input + "&limit=6&namespace=0&format=json&callback=?");
   $.getJSON(apiQuery, function(json){

      for (var i = 0; i < 6; i++){
        if (json[1][i] != undefined) {
          $("#resultBox" + i).html( "<a target='_blank' href='" + json[3][i] + "'>" + json[1][i] + "</a>" + "<br>" + json[2][i]).css("visibility", "visible");
        } else {
          $("#resultBox" + i).css("visibility", "hidden");
    };
      };

    });
  }; 

  function displayError() {
     $("#resultBox0").html("Im sorry, please try again.");
     $("#resultBox1").css("visibility", "hidden");
     $("#resultBox2").css("visibility", "hidden");
     $("#resultBox3").css("visibility", "hidden");
     $("#resultBox4").css("visibility", "hidden");
     $("#resultBox5").css("visibility", "hidden");
  };


  
 $("#input").keypress(function(e){
   if(e.which==13){update();};
    });
  
 $("#searchButton").on("click", update);
                       
});