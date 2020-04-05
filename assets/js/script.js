// Check off specific todos by clicking
$("ul").on("click", "li", function () {
  $(this).toggleClass("completed");
});

// Click on X to delete todo
$("ul").on("click", "span", function (event) {
  $(this)
    .parent()
    .fadeOut(500, function () {
      $(this).remove();
    });
  event.stopPropagation();
});

$("input[type='text']").keypress(function (event) {
  if (event.which === 13) {
    // grabbing new todo text from input
    var todoText = $(this).val();
    $(this).val("");
    console.log(todoText);
    // create a new li from input
    $("ul").append(
      `<li><span><i class="fa fa-trash-alt"></i></span> ${todoText}</li>`
    );
  }
});

$(".fa-plus").click(function () {
  $("input[type='text']").slideToggle();
});
