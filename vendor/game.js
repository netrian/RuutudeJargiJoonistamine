// Declare variable universal variables
var color;
var colorNumber;

// Change toggle class to red-bg
$("#red-btn").on("click", function () {
  color = "red-bg";
  //colorNumber = "1";
  $(".btn").removeClass("selected");
  $(this).addClass("selected");
});

// Change toggle class to brown-bg
$("#brown-btn").on("click", function () {
  color = "brown-bg";
  colorNumber = "2";
  $(".btn").removeClass("selected");
  $(this).addClass("selected");
});

// Change toggle class to tan-bg
$("#tan-btn").on("click", function () {
  color = "tan-bg";
  colorNumber = "3";
  $(".btn").removeClass("selected");
  $(this).addClass("selected");
});

// Change toggle class to black-bg
$("#black-btn").on("click", function () {
  color = "black-bg";
  colorNumber = "4";
  $(".btn").removeClass("selected");
  $(this).addClass("selected");
});

// Change toggle class to blue-bg
$("#blue-btn").on("click", function () {
  color = "blue-bg";
  colorNumber = "5";
  $(".btn").removeClass("selected");
  $(this).addClass("selected");
});

// Change toggle class to yellow-bg
$("#yellow-btn").on("click", function () {
  color = "yellow-bg";
  colorNumber = "6";
  $(".btn").removeClass("selected");
  $(this).addClass("selected");
});

// Change toggle class to white-bg
$("#white-btn").on("click", function () {
  color = "white-bg";
  colorNumber = "7";
  $(".btn").removeClass("selected");
  $(this).addClass("selected");
});

$("#charm-red-btn").on("click", function () {
  color = "charm-red-bg";
  colorNumber = "1";
  $(".btn").removeClass("selected");
  $(this).addClass("selected");
});

$("#charm-orange-btn").on("click", function () {
  color = "charm-orange-bg";
  colorNumber = "2";
  $(".btn").removeClass("selected");
  $(this).addClass("selected");
});

$("#charm-black-btn").on("click", function () {
  color = "charm-black-bg";
  colorNumber = "3";
  $(".btn").removeClass("selected");
  $(this).addClass("selected");
});

$("#charm-yellow-btn").on("click", function () {
  color = "charm-yellow-bg";
  colorNumber = "4";
  $(".btn").removeClass("selected");
  $(this).addClass("selected");
});

$("#charm-white-btn").on("click", function () {
  color = "charm-white-bg";
  colorNumber = "5";
  $(".btn").removeClass("selected");
  $(this).addClass("selected");
});

// On click of any of the cells...
$(".cell").on("click", function () {
  // Set data-color attribute to colorNumber variable
  $(this).attr("data-color", colorNumber);
  // If it already has the color you are using...
  if ($(this).hasClass(color)) {
    // Remove the color
    $(this).removeClass(color);
    $(this).removeClass("hide-copy");
    // Else if it has another color...
  } else if (
    $(this).hasClass("red-bg") ||
    $(this).hasClass("brown-bg") ||
    $(this).hasClass("tan-bg") ||
    $(this).hasClass("black-bg") ||
    $(this).hasClass("blue-bg") ||
    $(this).hasClass("yellow-bg") ||
    $(this).hasClass("white-bg") ||
    $(this).hasClass("charm-red-bg") ||
    $(this).hasClass("charm-black-bg") ||
    $(this).hasClass("charm-orange-bg") ||
    $(this).hasClass("charm-yellow-bg") ||
    $(this).hasClass("charm-white-bg") 
  ) {
    // Remove all colors and add selected color
    $(this).removeClass("red-bg");
    $(this).removeClass("brown-bg");
    $(this).removeClass("tan-bg");
    $(this).removeClass("black-bg");
    $(this).removeClass("blue-bg");
    $(this).removeClass("yellow-bg");
    $(this).removeClass("white-bg");
    $(this).removeClass("charm-red-bg");
    $(this).removeClass("charm-black-bg");
    $(this).removeClass("charm-orange-bg");
    $(this).removeClass("charm-yellow-bg");
    $(this).removeClass("charm-white-bg");
    $(this).addClass(color);
    $(this).addClass("hide-copy");
  } else {
    // Add the selected color
    $(this).addClass(color);
    $(this).addClass("hide-copy");
  }
});

// On click of the clear button...
$("#clear").on("click", function () {
  // Clear all cells
  $(".cell").removeClass("red-bg");
  $(".cell").removeClass("brown-bg");
  $(".cell").removeClass("tan-bg");
  $(".cell").removeClass("black-bg");
  $(".cell").removeClass("blue-bg");
  $(".cell").removeClass("yellow-bg");
  $(".cell").removeClass("white-bg");
  $(".cell").removeClass("hide-copy");
  $(this).removeClass("charm-red-bg");
  $(this).removeClass("charm-black-bg");
  $(this).removeClass("charm-orange-bg");
  $(this).removeClass("charm-yellow-bg");
  $(this).removeClass("charm-white-bg");
});

// On click of the check button clear all wrong cells
$("#check").on("click", function () {
  var cells = $(".cell");
  // Loop through array of cells
  for (i = 0; i < cells.length; ++i) {
    // If number in cell doesn't match data-color...
    if (cells[i].textContent != cells[i].dataset.color) {
      var test = cells[i];
      $(test).removeClass("red-bg");
      $(test).removeClass("brown-bg");
      $(test).removeClass("tan-bg");
      $(test).removeClass("black-bg");
      $(test).removeClass("blue-bg");
      $(test).removeClass("yellow-bg");
      $(test).removeClass("white-bg");
      $(test).removeClass("charm-red-bg");
      $(test).removeClass("charm-black-bg");
      $(test).removeClass("charm-orange-bg");
      $(test).removeClass("charm-yellow-bg");
      $(test).removeClass("charm-white-bg");
      $(test).removeClass("hide-copy");
    }
  }
});

