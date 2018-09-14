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
  
    $("#somethingelse").on("click", function(event) {
    var id = $(this).data("id");
    var newSleep = $(this).data("newsleep");

    var newSleepState = {
      sleepy: newSleep
    };

    // Send the PUT request.
    $.ajax("/api/cats/" + id, {
      type: "PUT",
      data: newSleepState
    }).then(
      function() {
        console.log("changed sleep to", newSleep);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
})