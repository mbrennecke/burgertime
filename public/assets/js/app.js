// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

  $("#addburger").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
	
    var newBurg = {
      name: $("#burger").val().trim()
    };
	if (newBurg.name == ""){return}
	$("#burger").val("");
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurg
    }).then(
      function() {
        // Reload the page to get the updated list
       location.reload();
      });
  });
  
    $(".devoured").on("click", function(event) {
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
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
})