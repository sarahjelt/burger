$(function () {
  $(".create").on("submit", function(event) {
    event.preventDefault();
    var newBurger = {
      burger_name: $(".nameo").val().trim()
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