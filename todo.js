// This section of code is how we prepare our code
// so this it is prepared to react to user events.
$(document).ready(function() {
  $(".btn").on("click", addComment);
  $(".link-delete").on("click", deleteComment);
  $("ol").on("click", ".link-delete", deleteComment);
});

// This function prompts the user for a to-do item
// and then appends it to the existing list of items.
// It also updates the counter at the top of the screen.
function addComment() {
  console.log("Thanks for your feedback!");
  var text = window.prompt("New Comment");
  var delete_link = '<a href="#" class="link-delete">(Delete)</a>'
  $("ol").append("<li>" + text + " " + delete_link + "</li>");

  var numComments = $("li").length;
  $(".total").html(numComments + " comments");

  // Challenge: Differentiate between 1 item vs. more items
  if (numComments == 1) {
    $(".total").html(numComments + " comment");
  }
  else {
    $(".total").html(numComments + " comments");
  }
}


// This function deletes an item from the list.
// The "event" parameter holds information on which
// item the user wishes to remove.
function deleteComment(event) {
  console.info(event);
  // $(event.target).remove();
  $(event.target).parent().remove();

  var numComments = $("li").length;
  $(".total").html(numComments + " comments");

  if (numComments == 1) {
    $(".total").html(numComments + " comment");
  }
  else {
    $(".total").html(numComments + " comments");
  }
}
