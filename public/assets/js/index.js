$(function() {
  $(".devour").on("click", function(event) {
    var id = $(this).data("id");
    var devoured = {
      devoured: true
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devoured
    }).then(() => {
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    var burgerName = $("#newBurger").val().trim();
    var newBurger;
    if (burgerName != '') {
      newBurger = {
        burger_name: burgerName,
        devoured: false
      };
    }
    else {
      return false;
    }

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(() => {
        location.reload();
      }
    );
  });
});
