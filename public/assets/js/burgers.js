$(function () {
  $(".eat").on("click", function(event) {
    var id = $(this).data("id");
    var newEat = $(this).data("neweat");

    var newEatState = {
      devoured: newEat
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newEatState
    }).then(
      function() {
        console.log("changed eat to", newEat);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create").on("submit", function(event) {
    event.preventDefault();
    var newBurger = {
      burger_name: $(".nameo").val().trim(),
      devoured: false
    };
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("added new burger, mmmm");
        location.reload();
      }
    )
  })
});