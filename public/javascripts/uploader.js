$(document).ready(function(){

  $("#submitcomic").click(function(){
        var filename = $("#filename").val();
        var myobj = {Filename:$("#filename").val(),Keywords:$("#keywords").val($
                Searchable:$("#textbox").val()};
        var jobj = JSON.stringify(myobj);
        console.log(jobj);
        $("#submittedtext").text(jobj);
        var url = "comic";
        $.ajax({
          url:url,
          type: "POST",
          data: jobj,
          contentType: "application/json; charset=utf-8",
          success: function(data,textStatus) {
               $("#status").html(textStatus);
          }
        })
  });

  $("#getComics").click(function() {
    $.getJSON('comic', function(data) {
      console.log(data);
      var everything = "<ul>";
      for(var items in data) {
        var item  = data[items];
        everything += "<li>Filename: " + item.Filename + " -- Key Words: "
        + item.Keywords + "  Searchable Text: " + item.Searchable + "</li>";
      }
      everything += "</ul>";
      $("#dbcontents").html(everything);
      console.log(everything);
    });
  });//end getThem

  $("#deleteComic").click(function() {
      $("#dbcontents").html("Comic deleted.");
      $("#filename").text("");
      $("#keywords").text("");
      $("#textbox").text("");

      var myobj = { Filename: $("#filename").val() };
      var jobj = JSON.stringify(myobj);
      console.log("Delete requested for: " + myobj);
      $("#submittedtext").text("");
    $.ajax({
          url: 'comic/'+$("#filename").val(),
          type: 'DELETE',
          success: function(jobj, result) {
             $("#done").text("Comics deleted");
          }
      });
   });




});//end document ready




