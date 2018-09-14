// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

  $("#addburger").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
	console.log("still working");
    var newBurg = {
      name: $("#burger").val().trim()
    };
	console.log(newBurg);
	$("#burger").val("");
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurg
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      });
  });
  
    $("#devoured").on("click", function(event) {
    var id = $(this).data("id");

    var newDevoured = {
      devoured: true
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevoured
    }).then(
      function() {
        console.log("changed devoured to", newDevoured);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
})